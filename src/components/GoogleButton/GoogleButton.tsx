import { EventInput } from "@fullcalendar/react"
import moment from "moment"
import ICalendarLink from "react-icalendar-link"
import { useState } from "react"
const ics = require("ics")
import ICalParser from 'ical-js-parser';

export interface GoogleButtonProps {
  timetable: Array<EventInput>
}

export const GoogleButton = (props: GoogleButtonProps) => {
  const { timetable } = props
  const [text, setText] = useState(null)

  // console.log(timetable)

  const exportToICS = () => {
    const events = []
    timetable.forEach((data) => {
      const event = data.extendedProps

      const start = moment(event.start)
        .format("YYYY-M-D-H-m")
        .split("-")
        .map(Number)

      const end = moment(event.end)
        .format("YYYY-M-D-H-m")
        .split("-")
        .map(Number)

      const newEvent = {
        title: event.title,
        start: start,
        duration: { hours: 1, minutes: 30 }
      }

      events.push(newEvent)
    })

    console.log(ics.createEvents(events))
    // setText(ics.createEvents(events))
    // const result = ICalParser.toString(events)
    console.log(result)
  }

  console.log(text)

  const events = {
    title: "My Title",
    description: "My Description",
    startTime: "2022-12-20T10:30:00+10:00",
    location: "10 Carlotta St, Artarmon NSW 2064, Australia"
  }

  return (
    <div>
      <button className="bg-gray-500" onClick={exportToICS}>
        Export to ICS
      </button>
      <p>{text?.value}</p>
      <ICalendarLink rawContent={text?.value}>Add to Calendar</ICalendarLink>
    </div>
  )
}
