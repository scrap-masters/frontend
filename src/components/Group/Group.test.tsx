import { routes } from "../../routing/routes"
import { render, screen } from "../../tests/tests.utils"
import { Group } from "./Group"

describe("<Group /> component", () => {
  it("render with proper text", () => {
    const elements = [{ id: 1, name: "Informatyka" }]
    render(
      <Group title="Wydziały" route={routes.departments} elements={elements} />
    )
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    expect(screen.getByText(elements[0].name)).toBeInTheDocument()
  })
})
