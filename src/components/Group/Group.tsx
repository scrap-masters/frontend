import classNames from "classnames"
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
      <div
        className={classNames(
          "my-12",
          elements.length < 5
            ? "flex flex-wrap justify-center gap-20"
            : "grid grid-cols-[repeat(auto-fill,_350px)] place-content-around place-items-center gap-20"
        )}
      >
        {elements.map(({ title, path, image }) => (
          <Card key={title} title={title} path={path} image={image} />
        ))}
      </div>
    </div>
  )
}
