import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { pathToUrl } from "../utils/routes.utils"

export const useGetFaculties = () =>
  useFetch<FacultiesProps>(apiRoutes.getFaculties)

export const useGetFaculty = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getFaculty, { id }))

export const useGetFacultyFields = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getFacultyFields, { id }))
