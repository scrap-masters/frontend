interface GroupLabelProps {
  title: string
}

export const GroupLabel = (props: GroupLabelProps) => {
  const { title } = props

  return <h2 className="text-center text-[45px] font-semibold">{title}</h2>
}
