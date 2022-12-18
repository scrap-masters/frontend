import { useFetch } from "../utils/reactQuery.utils"
import { apiRoutes } from "../constants/api"
import { pathToUrl } from "../utils/routes.utils"
import {
  SpecializationsLegendProps,
  SpecializationsTimetableProps
} from "../types/types"

export const useGetSpecialziations = () =>
  useFetch(apiRoutes.getSpecializations)

export const useGetSpecialization = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getSpecialization, { id }))

export const useGetSpecializationTimetable = (id: number) =>
  useFetch<SpecializationsTimetableProps>(
    pathToUrl(apiRoutes.getSpecializationTimetable, { id })
  )

export const useGetSpecializationLegend = (id: number) =>
  useFetch<SpecializationsLegendProps>(
    pathToUrl(apiRoutes.getSpecializationLegend, { id })
  )
