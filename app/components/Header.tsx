import { Link } from '@remix-run/react'
import { MouseEventHandler, useState } from 'react'

const MenuIcon = ({ onClick }: { onClick: MouseEventHandler }): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="menu-button"
    className="h-6 w-6 cursor-pointer md:hidden block"
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
)

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleIconCLick = () => setIsOpen(!isOpen)

  return (
    // <header className="flex items-baseline">
    //   <h1 className="grow text-3xl font-bold text-gray-900 dark:text-slate-300">
    //     <Link to="/">Radek Pleskac</Link>
    //   </h1>
    //   <nav>
    //     <Link to="/about" className="ml-5 hover:text-[#fda300]">
    //       About
    //     </Link>
    //     <Link to="/projects" className="ml-5 hover:text-[#fda300]">
    //       Projects
    //     </Link>
    //   </nav>
    // </header>
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full                 
        "
      >
        <div>
          <h1 className="grow text-3xl font-bold text-gray-900 dark:text-slate-300">
            <Link to="/">Radek Pleskac</Link>
          </h1>
        </div>

        <MenuIcon onClick={handleIconCLick} />

        <div
          className={`${
            isOpen ? '' : 'hidden'
          } w-full md:flex md:items-baseline md:w-auto`}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link to="/" className="ml-5 hover:text-[#fda300]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="ml-5 hover:text-[#fda300]">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/links" className="ml-5 hover:text-[#fda300]">
                Links
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
