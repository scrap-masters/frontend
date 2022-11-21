import { Router } from "./routing/Router"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}
