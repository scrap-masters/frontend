interface CardImageProps {
  title: string
}

export const CardImage = (props: CardImageProps) => {
  const { title } = props
  return (
    <div className="m-10 h-[300px] w-[350px] rounded-2xl bg-red-500 px-8 py-8 text-4xl font-medium text-white">
      <p className="text-center">{title}</p>
    </div>
  )
}
