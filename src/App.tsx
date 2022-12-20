import { Router } from "./routing/Router"
import { QueryClient, QueryClientProvider } from "react-query"
import "./style.css"

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}
