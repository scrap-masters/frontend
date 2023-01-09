import { useEffect, useRef } from "react"
import { EventInput } from "@fullcalendar/react"
import moment from "moment"
import { CSVLink } from "react-csv"

export interface GoogleButtonProps {
  timetable: Array<EventInput>
  filename: string
  instantDownload?: boolean
}

export const ExportButton = (props: GoogleButtonProps) => {
  const { timetable, filename, instantDownload = false } = props
  const btnRef = useRef(null)
  useEffect(() => btnRef.current?.click(), [btnRef])

  const events = [
    [
      "Subject",
      "Start Date",
      "Start Time",
      "End Date",
      "End Time",
      "All Day Event",
      "Description",
      "Location",
      "Private"
    ]
  ]

  timetable.forEach((data) => {
    const event = data.extendedProps
    const startDate = moment(event.start).format("DD/MM/YYYY")
    const startTime = moment(event.start).format("hh:mm:ss a")
    const endDate = moment(event.end).format("DD/MM/YYYY")
    const endTime = moment(event.end).format("hh:mm:ss a")
    events.push([
      event.title,
      startDate,
      startTime,
      endDate,
      endTime,
      "FALSE",
      event.lecturer,
      event.room,
      "FALSE"
    ])
  })

  return (
    <div className="float-right mt-1 rounded-xl bg-gray-300 px-2 py-1">
      <CSVLink
        data={events}
        filename={`${filename}_Plan_Zajęć`.replace(/ /g, "_")}
      >
        {instantDownload ? <span ref={btnRef} /> : "Export to CSV File"}
      </CSVLink>
    </div>
  )
}
