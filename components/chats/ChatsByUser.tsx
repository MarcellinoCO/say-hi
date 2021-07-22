import Image from "next/image"
import { ChatGroupByUser } from "@models/ChatGroupByUser"
import ChatBubble from "./ChatBubble"

const ChatsByUser = ({
  className = "",
  chatGroupsByUser
}: {
  className?: string,
  chatGroupsByUser: ChatGroupByUser[]
}) => {
  return (<>
    <div className={className + " flex flex-col"}>
      {chatGroupsByUser.map((chatGroup) => (
        <div
          key={chatGroup.userName + chatGroup.chats[0].id}
          className={"flex mt-4 "
            + (!chatGroup.chats[0].isOwner && "flex-row ")
            + (chatGroup.chats[0].isOwner && "flex-row-reverse ")}
        >
          <div className="rounded-full border-2 border-dashed border-gray-800" >
            <Image
              className="rounded-full"
              width={28}
              height={28}
              src={chatGroup.userPhoto}
              alt="Profile picture"
            />
          </div>

          <div className="flex flex-col px-2">
            <p className="text-xs">{chatGroup.userName}</p>

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
        </div>
      ))}
    </div>
  </>)
}
export default ChatsByUser
