import "tests.utils"
import { render, screen } from "@testing-library/react"
import { CardColor } from "./CardColor"
import { routes } from "../../routing/routes"
import { BrowserRouter } from "react-router-dom"

describe("<CardColor /> component", () => {
  it("render with proper text", () => {
    const title = "Stacjonarne"
    render(
      <BrowserRouter>
        <CardColor title={title} path={routes.field(1)} color="F00" />
      </BrowserRouter>
    )
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
