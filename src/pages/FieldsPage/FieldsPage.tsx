import { FieldsGroup } from "../../components/FieldsGroup"
import { useGetFacultyFields } from "../../api/faculties"
import { routes } from "../../routing/routes"
import { useParams } from "react-router-dom"

export const FieldsPage = () => {
  const { id } = useParams()
  const {
    data: fieldsData,
    isLoading,
    isError,
    error
  } = useGetFacultyFields(Number(id))

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>{error.message}</p>

  console.log(fieldsData)

  return (
    <FieldsGroup
      title="Kierunki"
      route={routes.specializations}
      fields={fieldsData.data.fields}
    />
  )
}
