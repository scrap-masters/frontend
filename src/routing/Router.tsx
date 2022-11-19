import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"

const router = createBrowserRouter([
  {
    path: routes.root(),
    element: <div>Temporary element</div>
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
