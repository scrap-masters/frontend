import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"
import { FieldsPage } from "../pages/FieldsPage"

export const router = createBrowserRouter([
  {
    path: routes.root(),
    element: <Layout />,
    children: [
      {
        path: routes.root(),
        element: <HomePage />
      },
      {
        path: routes.fields(),
        element: <FieldsPage />
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
