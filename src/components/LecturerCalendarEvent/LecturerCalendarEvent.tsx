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
  const { data } = extendedProps

  const type = data[0].type
  const room = data[0].room

  return (
    <div
      className={classNames(
        "h-full w-full overflow-auto rounded-[0.75rem] p-2   scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thumb-rounded",
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
      <div className="mt-5 flex flex-wrap">
        {data?.map((event) => (
          <p key={event.id}>{event.group},&nbsp;</p>
        ))}
      </div>
    </div>
  )
}
