import { ChatGroupByTime } from "@models/ChatGroupByTime"
import ChatBubble from "./ChatBubble"

const ChatsByTime = ({
  key,
  className = "",
  chatGroupsByTime
}: {
  key?: string,
  className?: string,
  chatGroupsByTime: ChatGroupByTime[]
}) => {
  return (<>
    <div className={className + " flex flex-col"}>
      {chatGroupsByTime.map((chatGroup) => (
        <div
          key={key}
          className={"flex mt-4 "
            + (!chatGroup.chats[0].isOwner && "flex-row ")
            + (chatGroup.chats[0].isOwner && "flex-row-reverse ")}
        >
          <div className="flex flex-col mt-1">
            {chatGroup.chats.map((chat, index) => (
              <ChatBubble
                key={chat.id}
                chat={chat}
                isFirst={index == 0}
                isLast={index == chatGroup.chats.length - 1}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </>)
}
export default ChatsByTime
