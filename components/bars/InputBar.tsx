import { FormEventHandler, useState } from "react"

const InputBar = ({
  className = "",
  isEnabled = true,
  onMessageSend = (_: string) => { }
}: {
  className?: string,
  isEnabled?: boolean,
  onMessageSend?: (message: string) => void
}) => {
  const [message, setMessage] = useState("")

  const sendMessage: FormEventHandler = async (event) => {
    event.preventDefault()

    onMessageSend(message)
    setMessage("")
  }

  return (<>
    <div className={"flex flex-row justify-between md:justify-center items-center bg-gray-200 " + className}>
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

        <button
          className={"w-10 h-10 ml-4 bg-yellow-400 rounded-full border-2 border-gray-800 "
            + ((message && isEnabled) && "transform transition-transform duration-100 hover:scale-110 ")
            + ((!message || !isEnabled) && "filter grayscale cursor-default ")}

          disabled={!message || !isEnabled}
          type="submit">
          👋
        </button>
      </form>
    </div>
  </>)
}
export default InputBar
