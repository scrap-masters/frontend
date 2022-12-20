import { EventInput } from "@fullcalendar/react"
import ApiCalendar from "react-google-calendar-api"

export interface GoogleButtonProps {
  timetable: Array<EventInput>
}

export const GoogleButton = (props: GoogleButtonProps) => {
  const { timetable } = props

  console.log(timetable)

  const config = {
    clientId:
      "893746188758-sfk7v5gk17isn2t25legvrk0on9da71n.apps.googleusercontent.com",
    apiKey: "AIzaSyDuTI3mui90Xct9E43Y8sw7Yzh80ZCOJd8",
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }

  const apiCalendar = new ApiCalendar(config)

  const handleClick = () => {
    apiCalendar.handleAuthClick()
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
    console.log(timeZone)
  }

  return <button onClick={handleClick}>GoogleButton</button>
}
