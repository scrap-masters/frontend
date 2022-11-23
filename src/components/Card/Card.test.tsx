import { render, screen } from "../../tests/tests.utils"
import { Card } from "./Card"

describe("<Card /> component", () => {
  it("render with proper text", () => {
    const title = "Wydział Nauk Technicznych i Ekonomicznych"
    render(<Card name={title} path="/" />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
