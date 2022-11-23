import { Group } from "../../components/Group"
import FacultyImg1 from "../../images/faculty1.png"
import FacultyImg2 from "../../images/faculty2.png"
import FacultyImg3 from "../../images/faculty3.png"
import { useGetFaculties } from "../../api/faculties"
import { routes } from "../../routing/routes"

const facultyImages: Array<string> = [FacultyImg1, FacultyImg2, FacultyImg3]

export const HomePage = () => {
  const { data, isLoading, isError, error } = useGetFaculties()

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{error.message}</p>

  return (
    <Group
      title="Wydziały"
      route={routes.departments}
      elements={data.data}
      images={facultyImages}
    />
  )
}
