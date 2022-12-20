import { Calendar } from "../../components/Calendar"
import { useParams } from "react-router-dom"
import {
  useGetSpecialization,
  useGetSpecializationLegend,
  useGetSpecializationTimetable
} from "../../api/specializations"
import { useEffect, useMemo, useState } from "react"
import { LegendTable } from "../../components/LegendTable"
import { Error } from "../../components/Error"
import { Loader } from "../../components/Loader"
import { ClassGroups } from "../../components/ClassGroups"

export const CalendarPage = () => {
  const { id } = useParams()

  const {
    data,
    isLoading: isTimetableLoading,
    isError: isTimetableError
  } = useGetSpecializationTimetable(Number(id))

  const {
    data: legendData,
    isLoading: isLegendLoading,
    isError: isLegendError
  } = useGetSpecializationLegend(Number(id))

  const {
    data: specializationData,
    isLoading: isSpecializationLoading,
    isError: isSpecializationError
  } = useGetSpecialization(Number(id))

  const [group, setGroup] = useState<string>(null)
  const timetableData = data?.data.timetable

  const groups = timetableData?.map((event) => event.group)

  const filteredGroups = groups?.filter(
    (group, index) => groups.indexOf(group) === index
  )

  const filteredTimetable = timetableData?.filter(
    (event) => event.group === group
  )

  useEffect(() => {
    setGroup(data?.data.timetable[0].group)
  }, [data])

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

  if (isTimetableLoading || isLegendLoading || isSpecializationLoading)
    return <Loader />

  if (isTimetableError || isLegendError || isSpecializationError)
    return <Error />

  return (
    <div>
      <h2 className="mb-10 text-center text-4xl font-semibold">
        {specializationData.data.field.name} ({specializationData.data.slug})
      </h2>
      <ClassGroups groups={filteredGroups} setGroup={setGroup} />
      <Calendar timetable={timetable} />
      <LegendTable legendData={legendData?.data?.legend} />
    </div>
  )
}
