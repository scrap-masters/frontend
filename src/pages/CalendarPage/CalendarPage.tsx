import { Calendar } from "../../components/Calendar"
import { useParams } from "react-router-dom"
import { useGetSpecializationTimetable } from "../../api/specializations"
import { useMemo } from "react"

export const CalendarPage = () => {
  const { id } = useParams()
  const { data } = useGetSpecializationTimetable(Number(id))

  console.log(data)

  const timetable = useMemo(() => {
    return data?.data.timetable.map((event) => ({
      start: event.start,
      end: event.end,
      title: event.title,
      extendedProps: {
        ...event
      }
    }))
  }, [data])

  console.log(timetable)

  return <Calendar timetable={timetable} />
}
