import { BrowserRouter } from "react-router-dom"
import { CardImage } from "./components/CardImage"
import { CardColor } from "./components/CardColor"
import { routes } from "./routing/routes"

export const App = () => {
  return (
    <BrowserRouter>
      <CardImage
        title="Wydział Nauk o Zdrowiu i Kulturze Fizycznej"
        path={routes.department(1)}
        imgUrl="/images/department1.png"
      />
      <CardColor
        title="Informatyka"
        path={routes.fieldOfStudy(1)}
        className="bg-red-500"
      />
    </BrowserRouter>
  )
}
