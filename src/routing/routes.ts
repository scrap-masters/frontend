export const routes = {
  root: () => "/",
  findEmployee: () => "/szukaj-pracownika",
  department: (id: number) => `/departments/${id}`,
  field: (id: number) => `/fields/${id}`
}
