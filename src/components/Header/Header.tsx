import { useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { NavLink } from "react-router-dom"

type NavLinkProps = { path: string; name: string }

const navLinks: NavLinkProps[] = [
  {
    path: "/",
    name: "Harmonogramy zajęć"
  },
  {
    path: "/szukaj-pracownika",
    name: "Szukaj pracownika"
  }
]

export const Header = () => {
  const [isOpenMobileNavbar, setIsOpenMobileNavbar] = useState(false)

  const toggleMobileNavbar = () => setIsOpenMobileNavbar((prev) => !prev)

  return (
    <header className="bg-black text-white">
      <div className="relative h-[115px] bg-black px-12 text-white">
        <button onClick={toggleMobileNavbar}>
          <GoThreeBars
            className="absolute top-1/2 left-3 -translate-y-1/2 transform lg:hidden"
            size="50"
          />
        </button>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-center text-4xl font-semibold md:left-1/3 md:text-5xl xl:left-1/2">
          CWUP - Plan zajęć
        </h1>
        <nav className="hidden h-full items-center justify-end gap-12 text-xl lg:flex">
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.path}>
                <NavLink to={navLink.path}>{navLink.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpenMobileNavbar && (
        <nav className="px-5 pb-7 lg:hidden">
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.path} className="mt-5 text-xl">
                <NavLink to={navLink.path}>{navLink.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
