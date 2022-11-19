interface CardColorProps {
  title: string
  color: string
}

export const CardColor = (props: CardColorProps) => {
  const { title, color } = props
  return (
    <div
      className={`m-10 flex h-[300px] w-[350px] items-center  justify-center rounded-2xl bg-${color} text-4xl font-medium text-white`}
    >
      <p className="text-center">{title}</p>
    </div>
  )
}
