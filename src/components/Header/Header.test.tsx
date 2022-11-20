import { render, screen } from "../../tests/tests.utils"
import { Header } from "./Header"

describe("<Header /> component", () => {
  it("render with proper text", () => {
    render(<Header />)
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
  })
})
