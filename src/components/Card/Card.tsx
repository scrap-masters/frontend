import classNames from "classnames"

export interface CardProps {
  id: number
  name: string
  year?: number
  className?: string
}

export const Card = (props: CardProps) => {
  const { name, className = "bg-gray-400", year = null } = props

  return (
    <div
      className={classNames(
        "grid h-[300px] w-[350px] rounded-2xl text-4xl font-medium text-white",
        className
      )}
    >
      <h3 className="z-10 col-end-1 row-end-1 m-auto px-9 text-center leading-relaxed">
        {name} {year && <>- {year} rok</>}
      </h3>
    </div>
  )
}
