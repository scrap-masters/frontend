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
        <img src={`/images/${imgUrl}`} alt="" className="col-end-1 row-end-1" />
        <div className="col-end-1 row-end-1 py-8 px-8 text-center">
          <p className="">{title}</p>
        </div>
      </div>
    </Link>
  )
}
