import { render, screen } from "../../tests/tests.utils"
import { Footer } from "./Footer"

describe("<Footer /> component", () => {
  it("render with proper text", () => {
    render(<Footer />)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })
})
