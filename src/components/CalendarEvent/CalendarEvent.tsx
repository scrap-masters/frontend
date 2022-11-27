import { EventContentArg } from "@fullcalendar/react"

export const CalendarEvent = (props: EventContentArg) => {
  const {
    event: { extendedProps, title }
  } = props

  return (
    <div
      className="flex h-full w-full flex-col justify-between rounded-[0.75rem] bg-purple-700 p-2"
      data-testid="calendar-event"
    >
      <p className="flex justify-between gap-1">
        <span className="font-bold">
          {title} ({extendedProps.type})
        </span>
        <span>{extendedProps.room}</span>
      </p>

      <span>{extendedProps.lecturer}</span>
    </div>
  )
}
