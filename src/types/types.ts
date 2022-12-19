import { EventInput } from "@fullcalendar/react"

export type FacultyProps = {
  id: number
  externalId: number
  name: string
}

export type FacultiesProps = {
  data: Array<FacultyProps>
}

export type FieldProps = {
  id: number
  name: string
  year: number
  slug: string
  isFullTime: boolean
  specializations: Array<SpecializationProps>
}

export type FieldsProps = {
  data: Array<FieldProps>
}

export type SpecializationProps = {
  id: number
  name: string
  slug: string
  field: FieldProps
}

export type SpecializationDataProps = {
  data: SpecializationProps
}

export type SpecializationsProps = {
  data: {
    id: number
    specializations: Array<SpecializationProps>
  }
}

export type FacultyFieldProps = {
  data: {
    id: number
    fields: Array<FieldProps>
  }
}

export type SpecializationsTimetableProps = {
  data: {
    id: number
    timetable: Array<EventInput>
  }
}

export type SpecializationsLegendProps = {
  data: {
    id: number
    legend: Array<LegendProps>
  }
}

export type LegendProps = {
  id: number
  slug: string
  fullName: string
}

export type LecturersProps = {
  data: Array<string>
}
