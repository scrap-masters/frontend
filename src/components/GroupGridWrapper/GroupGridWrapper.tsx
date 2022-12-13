import classNames from "classnames"

interface GroupGridWrapperProps {
  length: number
  children: React.ReactNode
}

export const GroupGridWrapper = (props: GroupGridWrapperProps) => {
  const { length, children } = props

  return (
    <div
      className={classNames(
        "my-12 w-full",
        length < 5
          ? "flex flex-wrap justify-center gap-20"
          : "grid grid-cols-[repeat(auto-fill,_350px)] place-content-between place-items-center gap-20"
      )}
    >
      {children}
    </div>
  )
}
