import { FieldsGroup } from "../../components/FieldsGroup"
import { useGetFacultyFields } from "../../api/faculties"
import { routes } from "../../routing/routes"
import { useParams } from "react-router-dom"
import { Loader } from "../../components/Loader"

export const FieldsPage = () => {
  const { id } = useParams()
  const {
    data: fieldsData,
    isLoading,
    isError,
    error
  } = useGetFacultyFields(Number(id))

  if (isLoading) return <Loader />

  if (isError) return <p>{error.message}</p>

  return (
    <FieldsGroup
      title="Kierunki"
      route={routes.specializations}
      fields={fieldsData.data.fields}
    />
  )
}
