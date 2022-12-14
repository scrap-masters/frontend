import { Group } from "../../components/Group"
import { useGetFaculties } from "../../api/faculties"
import { routes } from "../../routing/routes"
import { Loader } from "../../components/Loader"

export const HomePage = () => {
  const { data: facultiesData, isLoading, isError, error } = useGetFaculties()

  if (isLoading) return <Loader />

  if (isError) return <p>{error.message}</p>

  return (
    <Group
      title="Wydziały"
      route={routes.fields}
      elements={facultiesData.data}
    />
  )
}
