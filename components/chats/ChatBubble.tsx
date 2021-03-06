import Highlighter from "react-highlight-words"
import { Chat } from "@models/Chat"

const ChatBubble = ({
  className = "",
  chat,
  isFirst,
  isLast,
  searchQuery
}: {
  className?: string,
  chat: Chat,
  isFirst: boolean,
  isLast: boolean,
  searchQuery?: string[]
}) => {
  // Format: 'HH:mm'.
  const timeFormatter = Intl.DateTimeFormat("en-GB", { timeStyle: "short" })

  return (<>
    <div className={" flex w-full " + (chat?.isOwner && " flex-row-reverse ") + (!chat?.isOwner && " flex-row ")}>
      <div
        className={className + " flex flex-col px-4 py-2 bg-gray-100 "
          + (isFirst && chat?.isOwner && " rounded-b-xl rounded-l-xl ")
          + (isFirst && !chat?.isOwner && " rounded-r-xl rounded-b-xl ")
          + (!isFirst && " mt-1 rounded-xl ")}
      >
        
        <p className={" font-semibold break-all "
          + (chat?.isOwner && " text-right ")
          + (!chat?.isOwner && " text-left ")}
        >
          <Highlighter 
            highlightClassName="bg-yellow-200"
            searchWords={searchQuery ?? []}
            autoEscape={true}
            textToHighlight={chat?.message}
          />
        </p>
      </div>

      <div className={" flex flex-col justify-end mb-1 "
        + (chat?.isOwner && " mr-2 ")
        + (!chat?.isOwner && " ml-2 ")
        + (!isLast && " hidden ")}
      >
        <p className="text-xs">
          {timeFormatter.format(chat?.createdAt.toDate())}
        </p>
      </div>
    </div>
  </>)
}

export default ChatBubble
