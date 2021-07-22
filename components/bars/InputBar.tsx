import { FormEventHandler, useState } from "react"
import { FormButton } from "@components/Button"

const InputBar = ({
  className = "",
  isEnabled = true,
  onMessageSend
}: {
  className?: string,
  isEnabled?: boolean,
  onMessageSend: (message: string) => void
}) => {
  const [message, setMessage] = useState("")

  const sendMessage: FormEventHandler = async (event) => {
    event.preventDefault()

    onMessageSend(message)
    setMessage("")
  }

  return (<>
    <div className={className + " flex flex-row justify-between md:justify-center items-center bg-gray-200"}>
      <form
        className="flex flex-row items-center w-full h-full"
        onSubmit={sendMessage}
      >
        <input
          className={"w-full rounded-full border-2 "
            + "focus:border-transparent focus:ring-2 focus:ring-yellow-400"}

          placeholder={isEnabled ? "Say hi!" : "Please sign in to enable chat!"}
          value={message}
          onChange={(event) => setMessage(event.target.value)}

          disabled={!isEnabled}
          type="text"
        />

        <FormButton
          className="w-10 h-10 ml-4 bg-yellow-400"
          isEnabled={message !== "" && isEnabled}
        >
          👋
        </FormButton>
      </form>
    </div>
  </>)
}
export default InputBar
