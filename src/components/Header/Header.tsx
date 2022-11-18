import { useState } from "react"
import { GoThreeBars } from "react-icons/go"

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
          <a href="#">Harmonogramy zajęć</a>
          <a href="#">Szukaj pracownika</a>
        </div>
      </div>
      {IsMobileNavbar && (
        <div className="px-5 py-7 lg:hidden">
          <ul>
            <li className=" text-xl">
              <a href="#">Harmonogramy zajęć</a>
            </li>
            <li className="mt-5 text-xl">
              <a href="#">Szukaj pracownika</a>{" "}
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
