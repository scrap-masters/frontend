import { CardImage } from "./components/CardImage"
import { CardColor } from "./components/CardColor"
import { Footer } from "./components/Footer"
import { Router } from "./routing/Router"

export const App = () => {
  return (
    <div>
      <CardImage title="Wydział Nauk o Zdrowiu i Kulturze Fizycznej" />
      <CardColor title="Stacjonarne" color="red-500" />
      <Router />
      <Footer />
    </div>
  )
}
