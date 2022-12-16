import { ChangeEvent, useState } from "react"
import SwitchSelector from "react-switch-selector"
import { colors } from "../../constants/colors"
import { Card } from "../Card"
import { Link } from "react-router-dom"
import { GroupGridWrapper } from "../GroupGridWrapper"
import { GroupLabel } from "../GroupLabel"
import { FieldProps } from "../../types/types"
import { SearchBar } from "../SearchBar"

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
  const { title, fields: fetchedFields, route } = props
  const [fields, setFields] = useState<Array<FieldProps>>(fetchedFields)
  const [isFullTimeOnSwitch, setIsFullTimeOnSwitch] = useState(true)

  const onChange = (newValue) => {
    setIsFullTimeOnSwitch(newValue.isFullTime)
  }

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase()
    if (input === "") setFields(fetchedFields)
    else {
      const filteredFields = fetchedFields.filter((field) =>
        `${field.name} - ${field.year} rok`.toLowerCase().includes(input)
      )
      setFields(filteredFields)
    }
  }

  return (
    <div>
      <GroupLabel title={title} />
      <div className="mx-auto mt-5 h-12 w-96 xl:float-right xl:-mt-14">
        <SwitchSelector
          onChange={onChange}
          options={options}
          backgroundColor={"#EFF0F4"}
          selectedFontColor={"black"}
        />
      </div>
      <SearchBar filter={filter} placeholder="Szukaj kierunku..." />
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
