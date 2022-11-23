import { Link } from "react-router-dom"
import classNames from "classnames"

interface CardProps {
  name: string
  path: string
  className?: string
  image?: string
}

export const Card = (props: CardProps) => {
  const { name, path, className = "bg-gray-400", image } = props
  return (
    <Link to={path}>
      <div
        className={classNames(
          "grid h-[300px] w-[350px] rounded-2xl text-4xl font-medium text-white",
          className
        )}
      >
        {image && (
          <img
            src={image}
            alt={name}
            className="col-end-1 row-end-1 brightness-75"
          />
        )}
        <p className="z-10 col-end-1 row-end-1 m-auto px-9 text-center leading-relaxed">
          {name}
        </p>
      </div>
    </Link>
  )
}
