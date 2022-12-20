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

export const LecturerCalendarEvent = (props: EventContentArg) => {
  const {
    event: { extendedProps, title }
  } = props
  const { type, room, group } = extendedProps

  return (
    <div
      className={classNames(
        "flex w-20 flex-col gap-2 rounded-[0.75rem] p-2",
        eventTypeColors[type] || "bg-gray-400"
      )}
      data-testid="calendar-event"
    >
      <div>
        <p className="font-bold">
          {title} ({type})
        </p>
        <p>{room}</p>
      </div>
      <p>{group}</p>
    </div>
  )
}
