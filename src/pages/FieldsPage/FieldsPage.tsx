import { FieldsGroup } from "../../components/FieldsGroup"
import { useGetFacultyFields } from "../../api/faculties"
import { routes } from "../../routing/routes"
import { useParams } from "react-router-dom"
import { Loader } from "../../components/Loader"
import { Error } from "../../components/Error"

export const FieldsPage = () => {
  const { id } = useParams()
  const {
    data: fieldsData,
    isLoading,
    isError
  } = useGetFacultyFields(Number(id))

  if (isLoading) return <Loader />

  if (isError) return <Error />

  return (
    <FieldsGroup
      title="Kierunki"
      route={routes.specializations}
      fields={fieldsData.data.fields}
    />
  )
}
