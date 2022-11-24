import { Group } from "../../components/Group"
import { useGetFaculties } from "../../api/faculties"
import { routes } from "../../routing/routes"

export const HomePage = () => {
  const { data: facultiesData, isLoading, isError, error } = useGetFaculties()

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{error.message}</p>

  return (
    <Group
      title="Wydziały"
      route={routes.departments}
      elements={facultiesData.data}
    />
  )
}
