import { colors } from "../../constants/colors"
import { Card } from "../Card"
import { Link } from "react-router-dom"
import { GroupGridWrapper } from "../GroupGridWrapper"
import { GroupLabel } from "../GroupLabel"
import SwitchSelector from "react-switch-selector"
import { useState } from "react"

interface FieldsGroupProps {
  title: string
  fields: Array<FieldProps>
  route: (id: number) => string
}

const options = [
  {
    label: "Stacjonarne",
    value: {
      isFullTime: true
    },
    selectedBackgroundColor: "white"
  },
  {
    label: "Niestacjonarne",
    value: { isFullTime: false },
    selectedBackgroundColor: "white"
  }
]

export const FieldsGroup = (props: FieldsGroupProps) => {
  const { title, fields, route } = props
  const [isFullTimeOnSwitch, setIsFullTimeOnSwitch] = useState(true)

  const onChange = (newValue) => {
    setIsFullTimeOnSwitch(newValue.isFullTime)
  }

  return (
    <div className="px-20 py-10">
      <GroupLabel title={title} />
      <div className="float-right -mt-12 h-12 w-96">
        <SwitchSelector
          onChange={onChange}
          options={options}
          backgroundColor={"#EFF0F4"}
          selectedFontColor={"black"}
        />
      </div>
      <GroupGridWrapper length={fields.length}>
        {fields.map(
          ({ id, name, year, isFullTime }, index) =>
            isFullTimeOnSwitch === isFullTime && (
              <Link key={id} to={route(id)}>
                <Card
                  id={id}
                  name={`${name} - ${year} rok`}
                  className={colors[index % colors.length]}
                />
              </Link>
            )
        )}
      </GroupGridWrapper>
    </div>
  )
}
