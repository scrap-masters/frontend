import { ChangeEvent } from "react"
import { BiSearch } from "react-icons/bi"
import { FieldProps } from "../../types/types"

interface SearchBarProps {
  fetchedFields: Array<FieldProps>
  setFields: React.Dispatch<React.SetStateAction<FieldProps[]>>
}

export const SearchBar = (props: SearchBarProps) => {
  const { fetchedFields, setFields } = props

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div className="mt-10">
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative mx-auto w-full md:w-3/5">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <BiSearch size="30" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-3xl border border-gray-200 bg-gray-50 p-4 pl-12 text-sm text-gray-900 shadow-md focus:outline-none"
          placeholder="Search..."
          onChange={onChange}
        />
      </div>
    </div>
  )
}
