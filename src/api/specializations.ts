import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { pathToUrl } from "../utils/routes.utils"

export const useGetSpecialziations = () =>
  useFetch(apiRoutes.getSpecializations)

export const useGetSpecialization = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getSpecialization, { id }))
