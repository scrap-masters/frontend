import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { LecturersProps } from "../types/types"

export const useGetLecturers = () =>
  useFetch<LecturersProps>(apiRoutes.getLecturers)
