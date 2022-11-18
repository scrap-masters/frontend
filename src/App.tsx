import { Header } from "./components/Header/"
import { Footer } from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom"

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
