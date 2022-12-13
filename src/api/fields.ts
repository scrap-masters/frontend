import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { pathToUrl } from "../utils/routes.utils"
import { SpecializationsProps } from "../types/types"

export const useGetFiels = () => useFetch(apiRoutes.getFields)

export const useGetField = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getField, { id }))

export const useGetFieldSpecializations = (id: number) =>
  useFetch<SpecializationsProps>(
    pathToUrl(apiRoutes.getFieldSpecializations, { id })
  )
