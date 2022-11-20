import { Footer } from "../Footer"
import { Outlet } from "react-router-dom"
import { Header } from "../Header"

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
