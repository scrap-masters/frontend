import { Group } from "../../components/Group"
import { useGetFaculties } from "../../api/faculties"
import { routes } from "../../routing/routes"
import { Loader } from "../../components/Loader"
import { Error } from "../../components/Error"

export const HomePage = () => {
  const { data: facultiesData, isLoading, isError } = useGetFaculties()

  if (isLoading) return <Loader />

  if (isError) return <Error />

  return (
    <Group
      title="Wydziały"
      route={routes.fields}
      elements={facultiesData.data}
    />
  )
}
