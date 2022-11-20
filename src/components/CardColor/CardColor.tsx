import { Link } from "react-router-dom"
import classNames from "classnames"

interface CardColorProps {
  title: string
  path: string
  className: string
}

export const CardColor = (props: CardColorProps) => {
  const { title, path, className } = props
  return (
    <Link to={path}>
      <div
        className={classNames(
          "m-10 flex h-[300px] w-[350px] items-center justify-center rounded-2xl text-4xl font-medium text-white",
          className
        )}
      >
        <p className="text-center">{title}</p>
      </div>
    </Link>
  )
}
