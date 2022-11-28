import { routes } from "../../routing/routes"
import { render, screen } from "../../tests/tests.utils"
import { Group } from "./Group"

describe("<Group /> component", () => {
  const title = "Wydziały"
  const elements = [
    { id: 1, name: "Informatyka" },
    { id: 2, name: "Grafika" },
    { id: 3, name: "Sieci" }
  ]

  it("render with group header", () => {
    render(<Group title={title} route={routes.fields} elements={elements} />)
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
  })

  it("render without elements", () => {
    render(<Group title={title} route={routes.fields} elements={[]} />)
    expect(screen.queryAllByRole("heading", { level: 3 })).toHaveLength(0)
  })

  it("render with one Element", () => {
    render(
      <Group title={title} route={routes.fields} elements={[elements[0]]} />
    )
    expect(screen.queryAllByRole("heading", { level: 3 })).toHaveLength(1)
  })

  it("render with several elements", () => {
    render(<Group title={title} route={routes.fields} elements={elements} />)
    expect(screen.queryAllByRole("heading", { level: 3 })).toHaveLength(
      elements.length
    )
  })
})
