import { Link } from "react-router-dom"

interface CardColorProps {
  title: string
  path: string
  color: string
}

export const CardColor = (props: CardColorProps) => {
  const { title, path, color } = props
  return (
    <Link to={path}>
      <div
        className={`m-10 flex h-[300px] w-[350px] items-center  justify-center rounded-2xl bg-${color} text-4xl font-medium text-white`}
      >
        <p className="text-center">{title}</p>
      </div>
    </Link>
  )
}
