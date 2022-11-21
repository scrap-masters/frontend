import { render, screen } from "../../tests/tests.utils"
import { Card } from "./Card"

describe("<Card /> component", () => {
  it("render with proper text", () => {
    const title = "Wydział Nauk Technicznych i Ekonomicznych"
    render(<Card title={title} path="/" />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
