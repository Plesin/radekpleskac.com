import { Link } from "@remix-run/react";
import { MouseEventHandler, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MenuIcon = ({ onClick }: { onClick: MouseEventHandler }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="menu-button"
    className="block h-6 w-6 cursor-pointer md:hidden"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIconCLick = () => setIsOpen(!isOpen);
  const location = useLocation();
  const { pathname } = location;
  const selectedClass = (path: string) => {
    if (pathname === path) {
      return "text-primary";
    }
    return "";
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header>
      <nav className="flex w-full flex-wrap items-center justify-between">
        <div>
          <h1 className="grow text-3xl text-base font-bold">
            <Link to="/">Radek Pleskac</Link>
          </h1>
        </div>

        <MenuIcon onClick={handleIconCLick} />

        <div
          className={`${
            isOpen ? "mobile-visible" : "hidden"
          } h-screen w-full items-center md:flex md:h-auto md:w-auto`}
        >
          <ul className="md:flex md:justify-between">
            <li>
              <Link
                to="/"
                className={`ml-5 inline-block ${selectedClass("/")}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`ml-5 inline-block ${selectedClass("/projects")}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/links"
                className={`ml-5 inline-block ${selectedClass("/links")}`}
              >
                Links
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
