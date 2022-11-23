import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { pathToUrl } from "../utils/routes.utils"

type FacultyProps = {
  id: number
  externalId: number
  name: string
}

type FacultiesProps = {
  data: Array<FacultyProps>
}

export const useGetFaculties = () =>
  useFetch<FacultiesProps>(apiRoutes.getFaculties)

export const useGetFaculty = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getFaculty, { id }))

export const useGetFacultyFields = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getFacultyFields, { id }))
