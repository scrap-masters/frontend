import { colors } from "../../constants/colors"
import { Card, CardProps } from "../Card"
import { Link } from "react-router-dom"
import { GroupGridWrapper } from "../GroupGridWrapper"
import { GroupLabel } from "../GroupLabel"

interface GroupProps {
  title: string
  elements: Array<CardProps>
  route: (id: number) => string
}

export const Group = (props: GroupProps) => {
  const { title, elements, route } = props

  return (
    <div className="px-20 py-10">
      <GroupLabel title={title} />
      <GroupGridWrapper length={elements.length}>
        {elements.map(({ id, name }, index) => (
          <Link key={id} to={route(id)}>
            <Card id={id} name={name} className={colors[index]} />
          </Link>
        ))}
      </GroupGridWrapper>
    </div>
  )
}
