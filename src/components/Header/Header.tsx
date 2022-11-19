import { useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { NavLink } from "react-router-dom"
import { routes } from "../../routing/routes"

type NavLinkProps = { path: string; name: string }

const navLinks: NavLinkProps[] = [
  {
    path: routes.root(),
    name: "Harmonogramy zajęć"
  },
  {
    path: routes.findEmployee(),
    name: "Szukaj pracownika"
  }
]

export const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

  const toggleMobileNavbar = () => setIsMobileNavbarOpen((prev) => !prev)

  return (
    <header className="bg-black text-white">
      <div className="flex h-[115px] items-center bg-black px-12 ">
        <div className="grid w-full grid-cols-3 place-content-between">
          <button onClick={toggleMobileNavbar} className="-ml-7 lg:hidden">
            <GoThreeBars size="50" />
          </button>
          <h1 className="-mt-1 place-self-center whitespace-nowrap text-center text-4xl font-semibold lg:col-start-2">
            CWUP - Plan zajęć
          </h1>
          <nav>
            <ul className="hidden h-full items-center justify-end gap-12 text-xl lg:flex">
              {navLinks.map((navLink) => (
                <li key={navLink.path}>
                  <NavLink to={navLink.path}>{navLink.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {isMobileNavbarOpen && (
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
