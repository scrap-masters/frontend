import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { Layout } from "../components/Layout"
import { HomePage } from "../pages/HomePage"
import { FieldsPage } from "../pages/FieldsPage"
import { CalendarPage } from "../pages/CalendarPage"
import { SpecializationsPage } from "../pages/SpecializationsPage"
import { LecturersPage } from "../pages/LecturersPage"
import { LecturerCalendarPage } from "../pages/LecturerCalendarPage"

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
        path: routes.specializations(),
        element: <SpecializationsPage />
      },
      {
        path: routes.calendar(),
        element: <CalendarPage />
      },
      {
        path: routes.lecturers(),
        element: <LecturersPage />
      },
      {
        path: routes.lecturerCalendar(),
        element: <LecturerCalendarPage />
      }
    ]
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
