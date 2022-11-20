import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Card } from "../components/Card"
import { routes } from "./routes"

const router = createBrowserRouter([
  {
    path: routes.root(),
    element: (
      <div>
        <Card
          title="Wydział Nauk o Zdrowiu i Kulturze Fizycznej"
          path={routes.department(1)}
          image="/images/department1.png"
        />
        <Card
          title="Informatyka"
          path={routes.fieldOfStudy(1)}
          className="bg-red-500"
        />
      </div>
    )
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}
