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

  it("render with proper text", () => {
    render(
      <Group title={title} route={routes.departments} elements={elements} />
    )
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
  })

  it("render without elements", () => {
    render(<Group title={title} route={routes.departments} elements={[]} />)
    const currentElements = document.querySelectorAll("p")
    expect(currentElements).toHaveLength(0)
  })

  it("render with one Element", () => {
    render(
      <Group
        title={title}
        route={routes.departments}
        elements={elements.slice(0, 1)}
      />
    )
    const currentElements = document.querySelectorAll("p")
    expect(currentElements).toHaveLength(1)
  })

  it("render with several elements", () => {
    render(
      <Group title={title} route={routes.departments} elements={elements} />
    )
    const currentElements = document.querySelectorAll("p")
    expect(currentElements).toHaveLength(elements.length)
  })
})
