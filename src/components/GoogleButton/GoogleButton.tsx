import { EventInput } from "@fullcalendar/react"
import { gapi, loadAuth2 } from "gapi-script"
import { useEffect, useState } from "react"

export interface GoogleButtonProps {
  timetable: Array<EventInput>
}

export const GoogleButton = (props: GoogleButtonProps) => {
  const [user, setUser] = useState(null)
  const { timetable } = props

  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, process.env.CLIENT_ID, "")
      if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get())
      } else {
        attachSignin(document.getElementById("button"), auth2)
      }
    }
    setAuth2()
  }, [])

  useEffect(() => {
    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(gapi, process.env.REACT_APP_CLIENT_ID, "")
        attachSignin(document.getElementById("button"), auth2)
      }
      setAuth2()
    }
  }, [user])

  const updateUser = (currentUser) => {
    const name = currentUser.getBasicProfile().getName()
    const accessToken = currentUser.xc.access_token
    const calendarID = currentUser.getBasicProfile().getEmail()
    setUser({
      name,
      calendarID,
      accessToken
    })
  }

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(
      element,
      {},
      (googleUser) => {
        console.log(googleUser)
      },
      (error) => {
        console.log(JSON.stringify(error))
      }
    )
  }

  const exportEvents = () => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions()
    const event = timetable[0].extendedProps
    const newEvent = [
      {
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
      },
      {
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
    ]
    const initiate = () => {
      gapi.client
        .request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${user.calendarID}/events`,
          method: "POST",
          body: newEvent,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.accessToken}`
          }
        })
        .then(
          (response) => {
            return [true, response]
          },
          function (err) {
            console.log(err)
            return [false, err]
          }
        )
    }
    gapi.load("client", initiate)
  }

  return (
    <div>
      <button className="bg-blue-500" id="button">
        Login
      </button>
      {user && <p>{user.name}</p>}
      <button className="ml-2 bg-blue-500" onClick={exportEvents}>
        export
      </button>
    </div>
  )
}
