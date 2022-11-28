export const routes = {
  root: () => "/",
  findEmployee: () => "/szukaj-pracownika",
  fields: (id: number) => `/faculties/${id}/fields`,
  specializations: (id: number) => `/fields/${id}/specializations`
}
