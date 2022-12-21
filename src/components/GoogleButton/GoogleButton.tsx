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
    accessToken: process.env.ACCESS_TOKEN,
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  }

  const apiCalendar = new ApiCalendar(config)

  const handleClick = () => {
    apiCalendar.handleAuthClick()
  }

  const exportEvents = () => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
    timetable.forEach((data) => {
      const event = data.extendedProps
      const newEvent = {
        summary: event.title,
        location: event.room,
        start: {
          timeZone,
          dateTime: event.start
        },
        end: {
          timeZone,
          dateTime: event.end
        }
      }
      apiCalendar.createEvent(newEvent).then((res) => console.log(res))
    })
  }

  return (
    <div>
      <button className="bg-blue-500" onClick={handleClick}>
        Login
      </button>
      <button className="ml-2 bg-blue-500" onClick={exportEvents}>
        export
      </button>
    </div>
  )
}
