import { Footer } from "../Footer"
import { Outlet } from "react-router-dom"
import { Header } from "../Header"

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-screen-2xl flex-1 py-10 px-2 lg:py-16 lg:px-16 xl:px-32">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
