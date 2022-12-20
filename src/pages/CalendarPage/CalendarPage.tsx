import { Calendar } from "../../components/Calendar"
import { useParams } from "react-router-dom"
import {
  useGetSpecializationLegend,
  useGetSpecializationTimetable
} from "../../api/specializations"
import { useMemo } from "react"
import { LegendTable } from "../../components/LegendTable"
import { Error } from "../../components/Error"
import { Loader } from "../../components/Loader"
import { GoogleButton } from "../../components/GoogleButton"

export const CalendarPage = () => {
  const { id } = useParams()
  const { data } = useGetSpecializationTimetable(Number(id))
  const {
    data: legendData,
    isLoading,
    isError
  } = useGetSpecializationLegend(Number(id))

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

  if (isLoading) return <Loader />

  if (isError) return <Error />

  return (
    <div>
      <GoogleButton timetable={timetable} />
      <Calendar timetable={timetable} />
      <LegendTable legendData={legendData?.data?.legend} />
    </div>
  )
}
