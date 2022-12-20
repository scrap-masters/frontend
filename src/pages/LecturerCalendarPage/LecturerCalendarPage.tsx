import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useGetLecturersPlan } from "../../api/lecturers"
import { LecturerCalendar } from "../../components/LecturerCalendar"

export const LecturerCalendarPage = () => {
  const { name } = useParams()
  const { data } = useGetLecturersPlan(name)
  console.log(data)

  const filteredTimetable = Array.from(
    new Set(data?.data.timetable.map((event) => event.start))
  ).map((event) => {
    return {
      start: event,
      data: data?.data.timetable
        .filter((ev) => event == ev.start)
        .map((data) => data)
    }
  })

  console.log(filteredTimetable)

  const timetable = useMemo(() => {
    return filteredTimetable.map((event) => ({
      start: event.start,
      end: event.data[0].end,
      title: event.data[0].title,
      extendedProps: {
        ...event
      }
    }))
  }, [filteredTimetable])

  console.log(timetable)

  return (
    <div>
      <LecturerCalendar timetable={timetable} />
    </div>
  )
}
