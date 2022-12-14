import React, { ChangeEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useGetLecturers } from "../../api/lecturers"
import { Error } from "../../components/Error"
import { GroupLabel } from "../../components/GroupLabel"
import { Loader } from "../../components/Loader"
import { SearchBar } from "../../components/SearchBar"
import { routes } from "../../routing/routes"

export const LecturersPage = () => {
  const { data, isLoading, isError } = useGetLecturers()
  const fetchedLecturers = data?.data
  const [lecturers, setLecturers] = useState<Array<string>>([])

  useEffect(() => {
    setLecturers(fetchedLecturers)
  }, [fetchedLecturers])

  if (isLoading) return <Loader />

  if (isError) return <Error />

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase()
    if (input === "") {
      setLecturers(fetchedLecturers)
    } else {
      const filteredLecturers = fetchedLecturers.filter((lecturer) =>
        lecturer.toLowerCase().includes(input)
      )
      setLecturers(filteredLecturers)
    }
  }

  return (
    <div>
      <GroupLabel title="Pracownicy" />
      <SearchBar filter={filter} placeholder="Szukaj pracownika..." />
      <div className="flex justify-center">
        <ul className="mt-10 text-2xl font-semibold leading-[45px]">
          {lecturers?.map((lecturer) => (
            <li key={lecturer} className="text-blue-600">
              <Link to={routes.lecturerCalendar(lecturer)}>{lecturer}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
