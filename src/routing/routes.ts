export const routes = {
  root: () => "/",
  fields: (id?: number) =>
    id ? `/faculties/${id}/fields` : "/faculties/:id/fields",
  calendar: (id?: number) => (id ? `/calendar/${id}` : "/calendar/:id"),
  specializations: (id?: number) =>
    id ? `/fields/${id}/specializations` : "/fields/:id/specializations",
  lecturers: () => "/lecturer",
  lecturerCalendar: (name?: string) =>
    name ? `/lecturers/${name}` : "/lecturers/:name",
  downloadCSVFile: () => "/calendar/:id/:group"
}
