/* eslint-disable @typescript-eslint/no-unused-vars */
import { EventInput } from "@fullcalendar/react"

export type FacultyProps = {
  id: number
  externalId: number
  name: string
}

export type FacultiesProps = {
  data: Array<FacultyProps>
}

export type SpecializationsTimetableProps = {
  data: {
    id: number
    timetable: Array<EventInput>
  }
}
