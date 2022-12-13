export const routes = {
  root: () => "/",
  findEmployee: () => "/szukaj-pracownika",
  departments: (id: number) => `/departments/${id}/fields`,
  fieldOfStudy: (id: number) => `/fields/${id}`,
  calendar: (id?: number) => (id ? `/calendar/${id}` : "/calendar/:id")
}
