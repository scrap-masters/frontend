import { render, screen } from "../../tests/tests.utils"
import { Group } from "./Group"

describe("<Group /> component", () => {
  it("render with proper text", () => {
    render(<Group title="Wydziały" elements={[]} />)
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
  })
})
