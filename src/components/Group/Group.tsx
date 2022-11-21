import { Card } from "../Card"

type ElementProps = {
  title: string
  path: string
  color?: string
  image?: string
}

interface GroupProps {
  title: string
  elements: Array<ElementProps>
}

export const Group = (props: GroupProps) => {
  const { title, elements } = props
  return (
    <div className="px-20 py-10">
      <h2 className="text-center text-[45px] font-semibold">{title}</h2>
      <div className="mt-8 grid grid-cols-4 place-items-center">
        {elements.map((element) => (
          <Card
            key={element.title}
            title={element.title}
            path={element.path}
            image={element.image}
          />
        ))}
      </div>
    </div>
  )
}
