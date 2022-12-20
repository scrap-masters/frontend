import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { LecturersProps, LecturerTimetableProps } from "../types/types"
import { pathToUrl } from "../utils/routes.utils"

export const useGetLecturers = () =>
  useFetch<LecturersProps>(apiRoutes.getLecturers)

export const useGetLecturersPlan = (name: string) =>
  useFetch<LecturerTimetableProps>(
    pathToUrl(apiRoutes.getLecturersPlan, { name })
  )
