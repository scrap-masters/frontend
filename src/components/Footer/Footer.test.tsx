import { render, screen } from "../../tests/tests.utils"
import { Footer } from "./Footer"

describe("<Footer /> component", () => {
  it("render with proper text", () => {
    render(<Footer />)
    expect(
      screen.getByText("Copyright @2022, Scrap masters. All rights reserved.")
    ).toBeInTheDocument()
  })
})
