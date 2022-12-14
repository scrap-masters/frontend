import { ChangeEvent } from "react"
import { BiSearch } from "react-icons/bi"

interface SearchBarProps {
  placeholder?: string
  filter: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = (props: SearchBarProps) => {
  const { filter, placeholder } = props

  return (
    <div className="mt-10 px-5 lg:px-0">
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
          placeholder={placeholder || "Search..."}
          onChange={filter}
        />
      </div>
    </div>
  )
}
