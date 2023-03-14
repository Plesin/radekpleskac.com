import { Link } from '@remix-run/react'

export default function Header() {
  return (
    <header className="flex items-baseline">
      <h1 className="grow text-3xl font-bold text-gray-900 dark:text-slate-300">
        <Link to="/">Radek Pleskac</Link>
      </h1>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
