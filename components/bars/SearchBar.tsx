import { FormEventHandler, useState } from "react"
import { FormButton, TextButton } from "@components/Button"

const SearchBar = ({
  className = "",
  isEnabled,
  onSearch,
  onClose,
}: {
  className?: string,
  isEnabled: boolean,
  onSearch: (query: string) => void,
  onClose: () => void
}) => {
  const [query, setQuery] = useState("")

  const sendMessage: FormEventHandler = async (event) => {
    event.preventDefault()
    onSearch(query)
  }

  return (<>
    <div className={className + " flex flex-row items-center bg-gray-200 "}>
      <TextButton
        isEnabled={isEnabled}
        onClick={onClose}
      >
        ❌
      </TextButton>

      <form
        className="flex flex-row items-center w-full h-full ml-4"
        onSubmit={sendMessage}
      >
        <input
          className={" w-full rounded-xl border-2 text-xs "
            + " focus:border-transparent focus:ring-2 focus:ring-blue-400 "}

          placeholder={isEnabled ? "Search for messages..." : "Please sign in to enable chat!"}
          value={query}
          onChange={(event) => setQuery(event.target.value)}

          disabled={!isEnabled}
          type="text"
        />

        <FormButton
          className="w-9 h-9 ml-4 bg-blue-400"
          isEnabled={query !== "" && isEnabled}
        >
          🔍
        </FormButton>
      </form>
    </div>
  </>)
}

export default SearchBar
