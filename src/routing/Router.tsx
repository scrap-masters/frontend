import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "../components/Layout"

export const router = createBrowserRouter([
  {
    path: routes.root(),
    element: <Layout />,
    children: [
      {
        path: routes.root(),
        element: <div>This is temporary element</div>
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
