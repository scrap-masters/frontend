import { Link } from "react-router-dom"

interface CardImageProps {
  title: string
  path: string
}

export const CardImage = (props: CardImageProps) => {
  const { title, path } = props
  return (
    <Link to={path}>
      <div className="m-10 h-[300px] w-[350px] rounded-2xl bg-red-500 px-8 py-8 text-4xl font-medium text-white">
        <p className="text-center">{title}</p>
      </div>
    </Link>
  )
}
