import { CardImage } from "./components/CardImage"
import { Footer } from "./components/Footer"
import { Router } from "./routing/Router"

export const App = () => {
  return (
    <div>
      <CardImage title="Wydział Nauk o Zdrowiu i Kulturze Fizycznej" />
      <Router />
      <Footer />
    </div>
  )
}
