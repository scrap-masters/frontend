import "tests.utils"
import { render, screen } from "@testing-library/react"
import { Header } from "./Header"
import { BrowserRouter as Router } from "react-router-dom"

describe("<Header /> component", () => {
  it("render with proper text", () => {
    render(
      <Router>
        <Header />
      </Router>
    )
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
  })
})
