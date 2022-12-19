import { Calendar } from "../../components/Calendar"
import { useParams } from "react-router-dom"
import {
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
  const { data } = useGetSpecializationTimetable(Number(id))
  const {
    data: legendData,
    isLoading,
    isError
  } = useGetSpecializationLegend(Number(id))
  const [group, setGroup] = useState<string>(null)
  const timetableData = data?.data.timetable

  const groups = timetableData?.map((event) => event.group)

  const filteredGroups = groups?.filter(
    (group, index) => groups.indexOf(group) === index
  )

  const filteredTimetable = timetableData?.filter(
    (event) => event.group === group
  )

  console.log(filteredTimetable)

  useEffect(() => {
    setGroup(data?.data.timetable[0].group)
  }, [data])

  // console.log(filteredGroups)

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

  // console.log(timetable)

  if (isLoading) return <Loader />

  if (isError) return <Error />

  console.log(group)

  return (
    <div>
      <ClassGroups groups={filteredGroups} setGroup={setGroup} />
      <Calendar timetable={timetable} />
      <LegendTable legendData={legendData?.data?.legend} />
    </div>
  )
}
