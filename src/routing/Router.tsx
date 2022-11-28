import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"
import { FieldsPage } from "../pages/FieldsPage"
import { api } from "../utils/api.utils"
import { apiRoutes } from "../constants/api"

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
        path: apiRoutes.getFacultyFields,
        element: <FieldsPage />
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
