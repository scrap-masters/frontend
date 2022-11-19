import { Footer } from "../Footer"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      {/*  <Header /> <=== here*/}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
