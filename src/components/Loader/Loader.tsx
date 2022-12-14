import { GridLoader } from "react-spinners"

export const Loader = () => {
  return (
    <div className="flex h-[500px] items-center justify-center">
      <GridLoader size={20} />
    </div>
  )
}
