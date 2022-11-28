import classNames from "classnames"
import { colors } from "../../constants/colors"
import { Card, CardProps } from "../Card"
import { Link } from "react-router-dom"

interface GroupProps {
  title: string
  elements: Array<CardProps>
  route: (id: number) => string
}

export const Group = (props: GroupProps) => {
  const { title, elements, route } = props

  return (
    <div className="px-20 py-10">
      <h2 className="text-center text-[45px] font-semibold">{title}</h2>
      <div
        className={classNames(
          "my-12",
          elements?.length < 5
            ? "flex flex-wrap justify-center gap-20"
            : "grid grid-cols-[repeat(auto-fill,_350px)] place-content-around place-items-center gap-20"
        )}
      >
        {elements.map(({ id, name }, index) => (
          <Link key={id} to={route(id)}>
            <Card
              id={id}
              name={name}
              className={colors[index % colors.length]}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
