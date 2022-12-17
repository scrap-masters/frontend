import { Calendar } from "../../components/Calendar"
import { useParams } from "react-router-dom"
import {
  useGetSpecializationLegend,
  useGetSpecializationTimetable
} from "../../api/specializations"
import { useMemo } from "react"
import { LegendTable } from "../../components/LegendTable"

export const CalendarPage = () => {
  const { id } = useParams()
  const { data } = useGetSpecializationTimetable(Number(id))
  const { data: legendData } = useGetSpecializationLegend(Number(id))

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

  return (
    <div>
      <Calendar timetable={timetable} />
      <LegendTable legendData={legendData?.data?.legend} />
    </div>
  )
}
