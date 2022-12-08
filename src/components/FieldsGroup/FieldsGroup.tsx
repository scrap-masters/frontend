import classNames from "classnames"
import { colors } from "../../constants/colors"
import { Card } from "../Card"
import { Link } from "react-router-dom"

interface FieldsGroupProps {
  title: string
  fields: Array<FieldProps>
  route: (id: number) => string
}

export const FieldsGroup = (props: FieldsGroupProps) => {
  const { title, fields, route } = props

  return (
    <div className="px-20 py-10">
      <h2 className="text-center text-[45px] font-semibold">{title}</h2>
      <div
        className={classNames(
          "my-12",
          fields?.length < 5
            ? "flex flex-wrap justify-center gap-20"
            : "grid grid-cols-[repeat(auto-fill,_350px)] place-content-around place-items-center gap-20"
        )}
      >
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
      </div>
    </div>
  )
}
