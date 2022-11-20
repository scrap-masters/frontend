import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "../components/Layout"
import { Group } from "../components/Group"

export const router = createBrowserRouter([
  {
    path: routes.root(),
    element: <Layout />,
    children: [
      {
        path: routes.root(),
        element: (
          <div>
            <Group />
          </div>
        )
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
