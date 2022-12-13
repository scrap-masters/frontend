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

type FieldProps = {
  id: number
  name: string
  year: number
  slug: string
  isFullTime: boolean
  specializations: Array<SpecializationProps>
}

type FieldsProps = {
  data: Array<FieldProps>
}

type SpecializationProps = {
  id: number
  name: string
  slug: string
}

type SpecializationsProps = {
  data: Array<SpecializationProps>
}

type FacultyFieldProps = {
  data: {
    id: number
    fields: Array<FieldProps>
  }
}

type SpecializationsTimetableProps = {
  data: {
    id: number
    timetable: Array<EventInput>
  }
}
