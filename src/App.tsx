import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./components/Header/"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  )
}
