export const routes = {
  root: () => "/",
  findEmployee: () => "/szukaj-pracownika",
  fields: (id?: number) =>
    id ? `/faculties/${id}/fields` : `/faculties/:id/fields`,
  specializations: (id: number) => `/fields/${id}/specializations`,
  calendar: (id?: number) => (id ? `/calendar/${id}` : "/calendar/:id")
}
