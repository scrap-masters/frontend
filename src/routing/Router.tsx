import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"
import { FieldsPage } from "../pages/FieldsPage"
import { CalendarPage } from "../pages/CalendarPage"

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
      },
      {
        path: routes.calendar(),
        element: <CalendarPage />
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
