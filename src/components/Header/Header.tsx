import { useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { NavLink } from "react-router-dom"

const navLinks: { id: number; to: string; name: string }[] = [
  {
    id: 1,
    to: "/",
    name: "Harmonogramy zajęć"
  },
  {
    id: 2,
    to: "/szukaj-pracownika",
    name: "Szukaj pracownika"
  }
]

export const Header = () => {
  const [IsMobileNavbar, setIsMobileNavbar] = useState(false)
  return (
    <nav className="bg-black text-white">
      <div className="relative h-[115px] bg-black px-12 text-white">
        <button onClick={() => setIsMobileNavbar(!IsMobileNavbar)}>
          <GoThreeBars
            className="absolute top-1/2 left-3 -translate-y-1/2 transform lg:hidden"
            size="50"
          />
        </button>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap text-center text-4xl font-semibold md:left-1/3 md:text-5xl xl:left-1/2">
          CWUP - Plan zajęć
        </h1>
        <div className="hidden h-full items-center justify-end gap-12 text-xl lg:flex">
          {navLinks.map((navLink) => (
            <NavLink key={navLink.id} to={navLink.to}>
              {navLink.name}
            </NavLink>
          ))}
        </div>
      </div>
      {IsMobileNavbar && (
        <div className="px-5 pb-7 lg:hidden">
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.id} className=" mt-5 text-xl">
                <NavLink to={navLink.to}>{navLink.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
