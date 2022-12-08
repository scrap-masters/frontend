import { colors } from "../../constants/colors"
import { Card } from "../Card"
import { Link } from "react-router-dom"
import { GroupGridWrapper } from "../GroupGridWrapper"

interface FieldsGroupProps {
  title: string
  fields: Array<FieldProps>
  route: (id: number) => string
}

export const FieldsGroup = (props: FieldsGroupProps) => {
  const { title, fields, route } = props

  return (
    <GroupGridWrapper title={title} length={fields.length}>
      {fields.map(
        ({ id, name, year, isFullTime }, index) =>
          isFullTime && (
            <Link key={id} to={route(id)}>
              <Card
                id={id}
                name={`${name} - ${year} rok`}
                className={colors[index % colors.length]}
              />
            </Link>
          )
      )}
    </GroupGridWrapper>
  )
}
