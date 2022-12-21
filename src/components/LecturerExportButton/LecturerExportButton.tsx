import { EventInput } from "@fullcalendar/react"
import moment from "moment"
import { CSVLink } from "react-csv"

export interface GoogleButtonProps {
  timetable: Array<EventInput>
  filename: string
}

export const LecturerExportButton = (props: GoogleButtonProps) => {
  const { timetable, filename } = props

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
    const event = data.extendedProps.data
    const startDate = moment(data.start).format("DD/MM/YYYY")
    const startTime = moment(data.start).format("hh:mm:ss a")
    const endDate = moment(data.end).format("DD/MM/YYYY")
    const endTime = moment(data.end).format("hh:mm:ss a")
    const groups = event.map((e) => e.group).toString()

    events.push([
      data.title,
      startDate,
      startTime,
      endDate,
      endTime,
      "FALSE",
      groups,
      event[0].room,
      "FALSE"
    ])
  })

  return (
    <div className="float-right mt-1 rounded-xl bg-gray-300 px-2 py-1">
      <CSVLink
        data={events}
        filename={`${filename}_Plan_Zajęć`.replace(/ /g, "_")}
      >
        Export to CSV File
      </CSVLink>
    </div>
  )
}
