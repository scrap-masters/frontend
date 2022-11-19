import "tests.utils"
import { render, screen } from "@testing-library/react"
import { CardImage } from "./CardImage"
import { routes } from "../../routing/routes"
import { BrowserRouter } from "react-router-dom"

describe("<Footer /> component", () => {
  it("render with proper text", () => {
    const title = "Wydział Nauk o Zdrowiu i Kulturze Fizycznej"
    render(
      <BrowserRouter>
        <CardImage
          title={title}
          path={routes.department(1)}
          imgUrl="department1.png"
        />
      </BrowserRouter>
    )
    expect(screen.getByAltText(title)).toBeInTheDocument()
  })
})
