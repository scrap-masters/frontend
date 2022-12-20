import { EventInput } from "@fullcalendar/react"
import ApiCalendar from "react-google-calendar-api"

export interface GoogleButtonProps {
  timetable: Array<EventInput>
}

export const GoogleButton = (props: GoogleButtonProps) => {
  const { timetable } = props

  console.log(timetable)

  const config = {
    clientId: process.env.CLIENT_ID,
    apiKey: process.env.API_KEY,
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }

  const apiCalendar = new ApiCalendar(config)

  const handleClick = () => {
    apiCalendar.handleAuthClick()
  }

  const exportEvents = () =>
    apiCalendar.onLoad(() => {
      const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
      const event = {
        start: {
          timeZone,
          dateTime: "2022-12-20T11:30:00"
        },
        end: {
          timeZone,
          dateTime: "2022-12-20T13:00:00"
        }
      }
      apiCalendar.createEvent(event)
    })

  return (
    <>
      <button onClick={handleClick}>GoogleButton</button>
      <button onClick={exportEvents}>export</button>
    </>
  )
}
