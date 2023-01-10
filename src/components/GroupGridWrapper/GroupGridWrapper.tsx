import classNames from "classnames"

interface GroupGridWrapperProps {
  length: number
  children: Array<React.ReactNode>
  emptyMessage?: string
}

export const GroupGridWrapper = (props: GroupGridWrapperProps) => {
  const { length, children, emptyMessage = "Brak elementów." } = props

  return (
    <div
      className={classNames(
        "my-12 w-full",
        length < 3
          ? "flex flex-wrap justify-center gap-20"
          : "md: grid grid-cols-[repeat(auto-fill,_350px)] place-content-around gap-20"
      )}
    >
      {children.length === 0 || children.every((child) => !child) ? (
        <p className="absolute text-center text-xl">{emptyMessage}</p>
      ) : (
        children
      )}
    </div>
  )
}
