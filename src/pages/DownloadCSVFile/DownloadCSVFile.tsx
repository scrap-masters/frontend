import { useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  useGetSpecialization,
  useGetSpecializationTimetable
} from "../../api/specializations"
import { ExportButton } from "../../components/ExportButton"
import { Loader } from "../../components/Loader"
import { Error } from "../../components/Error"
import { routes } from "../../routing/routes"

export const DownloadCSVFile = () => {
  const { id, group } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (timetable) navigate(routes.calendar(Number(id)))
  })

  const {
    data,
    isLoading: isTimetableLoading,
    isError: isTimetableError
  } = useGetSpecializationTimetable(Number(id))
  const {
    data: specializationData,
    isLoading: isSpecializationLoading,
    isError: isSpecializationError
  } = useGetSpecialization(Number(id))

  const timetableData = data?.data.timetable

  const filteredTimetable = timetableData?.filter(
    (event) => event.group === group
  )

  const timetable = useMemo(() => {
    return filteredTimetable?.map((event) => ({
      start: event.start,
      end: event.end,
      title: event.title,
      extendedProps: {
        ...event
      }
    }))
  }, [filteredTimetable])

  if (isTimetableLoading || isSpecializationLoading) return <Loader />

  if (isTimetableError || isSpecializationError) return <Error />

  const fieldName = `${specializationData.data.field.name} (${specializationData.data.slug})`

  return (
    timetable && (
      <ExportButton
        instantDownload
        timetable={timetable}
        filename={fieldName}
      />
    )
  )
}
