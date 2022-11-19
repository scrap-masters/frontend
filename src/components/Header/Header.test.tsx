import "tests.utils"
import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

describe("<Header /> component", () => {
  it("render with proper text", () => {
    render(<Header />)
    expect(screen.getByText("CWUP - Plan zajęć")).toBeInTheDocument()
  })
})
