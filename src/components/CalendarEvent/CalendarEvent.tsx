import { EventContentArg } from "@fullcalendar/react"
import classNames from "classnames"

const eventTypeColors = {
  ćw: "bg-lime-500",
  lab: "bg-purple-500",
  wyk: "bg-red-500",
  sem: "bg-blue-500",
  p: "bg-yellow-400",
  wt: "bg-cyan-400"
}

export const CalendarEvent = (props: EventContentArg) => {
  const {
    event: { extendedProps, title }
  } = props
  const { type, room, lecturer } = extendedProps

  return (
    <div
      className={classNames(
        "flex h-full w-full flex-col justify-between rounded-[0.75rem] p-2",
        eventTypeColors[type] || "bg-gray-400"
      )}
      data-testid="calendar-event"
    >
      <p className="flex justify-between gap-1">
        <span className="font-bold">
          {title} ({type})
        </span>
        <span className="text-right">{room}</span>
      </p>

      <span>{lecturer}</span>
    </div>
  )
}
