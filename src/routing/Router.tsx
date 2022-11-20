import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Card } from "../components/Card"
import { routes } from "./routes"
import { Layout } from "../components/Layout"

export const router = createBrowserRouter([
  {
    path: routes.root(),
    element: <Layout />,
    children: [
      {
        element: <div>This is content, you can put any component here</div>
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
