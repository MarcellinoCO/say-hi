import { FormEventHandler, useState } from "react"

const InputBar = ({
  className = "",
  onMessageSend = (message: string) => { }
}: {
  className?: string,
  onMessageSend?: (message: string) => void
}) => {
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const sendMessage: FormEventHandler = async (event) => {
    event.preventDefault()

    onMessageSend(message)

    setMessage("")
    setSent(true)
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

          placeholder="Say hi!"
          value={message}
          onChange={(event) => setMessage(event.target.value)}

          type="text"
        />

        <button
          className={"w-10 h-10 ml-4 bg-yellow-400 rounded-full border-2 border-gray-800 "
            + ((message) ? "transform transition-transform duration-100 hover:scale-110 " : "")
            + ((!message) ? "filter grayscale cursor-default " : "")}

          disabled={!message}
          type="submit">
          👋
        </button>
      </form>
    </div>
  </>)
}
export default InputBar