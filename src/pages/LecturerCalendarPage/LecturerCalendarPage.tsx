import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { useGetLecturersPlan } from "../../api/lecturers"
import { LecturerCalendar } from "../../components/LecturerCalendar"

export const LecturerCalendarPage = () => {
  const { name } = useParams()
  const { data } = useGetLecturersPlan(name)
  const lecturer = data?.data.timetable[0].lecturer

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

  return (
    <div>
      <h2 className="mb-10 text-center text-4xl font-semibold">{lecturer}</h2>
      <LecturerCalendar timetable={timetable} />
    </div>
  )
}
