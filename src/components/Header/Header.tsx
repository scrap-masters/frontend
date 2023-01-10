import { useState } from "react"
import Logo from "../../images/cwup-logo.jpg"
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
    path: routes.lecturers(),
    name: "Szukaj pracownika"
  }
]

export const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false)

  const toggleMobileNavbar = () => setIsMobileNavbarOpen((prev) => !prev)

  return (
    <header className="bg-main text-white">
      <div className="flex h-[115px] items-center px-12">
        <div className="grid w-full grid-cols-3 place-content-between">
          <button onClick={toggleMobileNavbar} className="z-10 -ml-7 xl:hidden">
            <GoThreeBars size="40" />
          </button>
          <NavLink
            to={routes.root()}
            className="-mt-1 place-self-center lg:col-start-2"
          >
            <div className="ml-5 flex items-center justify-center sm:ml-0 sm:gap-2">
              <img src={Logo} alt="logo" className="w-20 sm:w-24" />
              <h1 className=" whitespace-nowrap text-center text-2xl font-semibold sm:text-4xl">
                CWUP - Plan zajęć
              </h1>
            </div>
          </NavLink>
          <nav>
            <ul className="hidden h-full items-center justify-end gap-12 text-xl xl:flex">
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
