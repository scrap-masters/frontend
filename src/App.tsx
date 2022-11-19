import { CardImage } from "./components/CardImage"
import { CardColor } from "./components/CardColor"
import { Footer } from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { routes } from "./routing/routes"

export const App = () => {
  const { department, field } = routes
  return (
    <div>
      <BrowserRouter>
        <CardImage
          title="Wydział Nauk o Zdrowiu i Kulturze Fizycznej"
          path={department(1)}
        />
        <CardColor title="Stacjonarne" path={field(1)} color="red-500" />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
