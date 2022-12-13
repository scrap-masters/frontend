export const routes = {
  root: () => "/",
  findEmployee: () => "/szukaj-pracownika",
  fields: (id?: number) =>
    id ? `/faculties/${id}/fields` : `/faculties/:id/fields`,
  calendar: (id?: number) => (id ? `/calendar/${id}` : "/calendar/:id"),
  specializations: (id?: number) =>
    id ? `/fields/${id}/specializations` : "/fields/:id/specializations"
}
