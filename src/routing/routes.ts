export const routes = {
  root: () => "/",
  department: (id: number) => `/departments/${id}`,
  field: (id: number) => `/fields/${id}`
}
