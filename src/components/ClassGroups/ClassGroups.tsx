import SwitchSelector from "react-switch-selector"
import classNames from "classnames"

interface ClassGroupsProps {
  groups: Array<string>
  setGroup: React.Dispatch<React.SetStateAction<string>>
}

export const ClassGroups = (props: ClassGroupsProps) => {
  const { groups, setGroup } = props

  const options = groups?.sort().map((group) => ({
    label: group,
    value: group,
    selectedBackgroundColor: "white"
  }))

  const onChange = (newValue) => {
    setGroup(newValue)
  }
  return (
    <div className="mb-5 overflow-auto ">
      <div
        className={classNames(
          "h-10",
          groups?.length > 5 && groups?.length < 10 && "min-w-[600px]",
          groups?.length >= 10 && "min-w-[800px]"
        )}
      >
        <SwitchSelector
          onChange={onChange}
          options={options}
          backgroundColor={"#EFF0F4"}
          selectedFontColor={"black"}
        />
      </div>
    </div>
  )
}
