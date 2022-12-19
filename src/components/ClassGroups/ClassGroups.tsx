import SwitchSelector from "react-switch-selector"

interface ClassGroupsProps {
  groups: Array<string>
  setGroup: React.Dispatch<React.SetStateAction<string>>
}

export const ClassGroups = (props: ClassGroupsProps) => {
  const { groups, setGroup } = props

  const options = groups?.map((group) => ({
    label: group,
    value: group,
    selectedBackgroundColor: "white"
  }))

  const onChange = (newValue) => {
    setGroup(newValue)
  }
  return (
    <SwitchSelector
      onChange={onChange}
      options={options}
      backgroundColor={"#EFF0F4"}
      selectedFontColor={"black"}
    />
  )
}
