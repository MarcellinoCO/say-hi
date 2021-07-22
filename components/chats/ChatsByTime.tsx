import { ChatGroupByTime } from "@models/ChatGroupByTime"
import ChatBubble from "./ChatBubble"

const ChatsByTime = ({
  className = "",
  chatGroupsByTime
}: {
  className?: string,
  chatGroupsByTime: ChatGroupByTime
}) => {
  return (<>
    <div className={className + " flex flex-col mt-1"}>
      {chatGroupsByTime.chats.map((chat, index) => (
        <ChatBubble
          key={chat.id}
          chat={chat}
          isFirst={index == 0}
          isLast={index == chatGroupsByTime.chats.length - 1}
        />
      ))}
    </div>
  </>)
}
export default ChatsByTime
