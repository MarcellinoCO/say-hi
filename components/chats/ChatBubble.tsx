import { Chat } from "@models/Chat"

const ChatBubble = ({
  className = "",
  chat,
  isFirst = false,
  isLast = false,
}: {
  className?: string,
  chat?: Chat,
  isFirst?: boolean,
  isLast?: boolean
}) => {
  // Format: 'HH:mm'.
  const dateFormatter = Intl.DateTimeFormat("en-GB", { timeStyle: "short" })

  return (<>
    <div className="flex flex-row">
      <div
        className={className + " flex flex-col px-4 py-2 bg-gray-100 "
          + (isFirst && chat?.isOwner && " rounded-b-xl rounded-l-xl ")
          + (isFirst && !chat?.isOwner && " rounded-r-xl rounded-b-xl ")
          + (!isFirst && " mt-1 rounded-xl ")}
      >
        <p className={"font-semibold " + (chat?.isOwner && "text-right ") + (!chat?.isOwner && "text-left ")}>
          {chat?.message}
        </p>
      </div>

      <div className={"flex flex-col justify-end mb-1 "
        + (chat?.isOwner && " mr-1 ")
        + (!chat?.isOwner && " ml-1 ")
        + (!isLast && " hidden ")}>
        <p className="text-xs">{dateFormatter.format(chat?.createdAt.toDate())}</p>
      </div>
    </div>
  </>)
}
export default ChatBubble
