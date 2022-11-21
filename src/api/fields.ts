import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { pathToUrl } from "../utils/routes.utils"

export const useGetFiels = () => useFetch(apiRoutes.getFields)

export const useGetField = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getField, { id }))

export const useGetFieldSpecializations = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getFieldSpecializations, { id }))
