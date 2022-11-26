import { render, screen } from "../../tests/tests.utils"
import { Card } from "./Card"

describe("<Card /> component", () => {
  it("render with proper text", () => {
    const title = "Wydział Nauk Technicznych i Ekonomicznych"
    render(<Card id={1} name={title} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
