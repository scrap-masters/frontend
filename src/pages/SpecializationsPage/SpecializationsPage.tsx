import { useParams } from "react-router-dom"
import { useGetFieldSpecializations } from "../../api/fields"
import { Group } from "../../components/Group"
import { routes } from "../../routing/routes"

export const SpecializationsPage = () => {
  const { id } = useParams()
  const {
    data: specializationsData,
    isLoading,
    isError,
    error
  } = useGetFieldSpecializations(Number(id))

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{error.message}</p>

  return (
    <Group
      title="Specjalizacje"
      route={routes.calendar}
      elements={specializationsData.data.specializations}
    />
  )
}
