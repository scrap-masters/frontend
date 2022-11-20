import { Link } from "react-router-dom"

interface CardImageProps {
  title: string
  path: string
  imgUrl: string
}

export const CardImage = (props: CardImageProps) => {
  const { title, path, imgUrl } = props
  return (
    <Link to={path}>
      <div
        className="m-10 grid h-[300px] w-[350px] rounded-2xl 
        text-4xl font-medium text-white"
      >
        <img
          src={imgUrl}
          alt={title}
          className="col-end-1 row-end-1 brightness-75"
        />
        <p className="z-10 col-end-1 row-end-1 m-auto text-center leading-relaxed">
          {title}
        </p>
      </div>
    </Link>
  )
}
