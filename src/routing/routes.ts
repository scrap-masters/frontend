export const routes = {
  root: () => "/",
  findEmployee: () => "/szukaj-pracownika",
  fields: (id?: number) =>
    id ? `/faculties/${id}/fields` : `/faculties/:id/fields`,
  specializations: (id: number) => `/fields/${id}/specializations`,
  departments: (id: number) => `/departments/${id}/fields`,
  fieldOfStudy: (id: number) => `/fields/${id}`,
  calendar: (id?: number) => (id ? `/calendar/${id}` : "/calendar/:id")
}
