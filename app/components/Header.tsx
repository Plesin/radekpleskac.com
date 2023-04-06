import { Link } from '@remix-run/react'
import { MouseEventHandler, useState } from 'react'
import { useLocation } from 'react-router-dom'

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
  const location = useLocation()
  const { pathname } = location
  const selectedClass = (path: string) => {
    if (pathname === path) {
      return 'text-primary'
    }
    return ''
  }

  return (
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
          <h1 className="grow text-3xl font-bold text-base">
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
              <Link to="/" className={`ml-5 ${selectedClass('/')}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`ml-5 ${selectedClass('/projects')}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to="/links" className={`ml-5 ${selectedClass('/links')}`}>
                Links
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
