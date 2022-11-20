import "@testing-library/jest-dom"
import { render, RenderOptions } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ReactElement, ReactNode } from "react"

const Providers = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options })
export * from "@testing-library/react"
export { customRender as render }
