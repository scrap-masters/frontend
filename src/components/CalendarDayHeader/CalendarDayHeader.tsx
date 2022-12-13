import { DayHeaderContentArg } from "@fullcalendar/react"

export const CalendarDayHeader = (props: DayHeaderContentArg) => {
  const { date } = props
  const dateParts = Intl.DateTimeFormat("pl", {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date)

  const weekDay = `${dateParts[0].value[0].toUpperCase()}${dateParts[0].value.slice(
    1
  )}`
  const fullDate = `(${dateParts[2].value}.${dateParts[4].value}.${dateParts[6].value})`

  return (
    <div className="flex flex-col p-6 text-sm font-normal">
      <span>{weekDay}</span>
      <span>{fullDate}</span>
    </div>
  )
}
