import classNames from "classnames"

interface GroupGridWrapperProps {
  title: string
  length: number
  children: React.ReactNode
}

export const GroupGridWrapper = (props: GroupGridWrapperProps) => {
  const { title, length, children } = props
  return (
    <div>
      <div className="px-20 py-10">
        <h2 className="text-center text-[45px] font-semibold">{title}</h2>
        <div
          className={classNames(
            "my-12",
            length < 5
              ? "flex flex-wrap justify-center gap-20"
              : "grid grid-cols-[repeat(auto-fill,_350px)] place-content-around place-items-center gap-20"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
