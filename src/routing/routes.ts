export const routes = {
  root: () => "/",
  findEmployee: () => "/szukaj-pracownika",
  department: (id: number) => `/departments/${id}`,
  fieldOfStudy: (id: number) => `/fields/${id}`
}
