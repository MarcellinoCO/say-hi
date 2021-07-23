import Image from "next/image"

import { ChatGroupByUser } from "@models/ChatGroupByUser"
import ChatsByTime from "@components/chats/ChatsByTime"

import groupChatsByTime from "@utils/chats/groupChatsByTime"

const ChatsByUser = ({
  className = "",
  chatGroupsByUser
}: {
  className?: string,
  chatGroupsByUser: ChatGroupByUser[]
}) => {
  return (<>
    <div className={className + " flex flex-col pb-4 "}>
      {chatGroupsByUser.map((chatGroup) => (
        <div
          key={`UserChatGroup: ${chatGroup.userName} ${chatGroup.chats[0].id}`}
          className={" flex mt-4 "
            + (!chatGroup.chats[0].isOwner && " flex-row ")
            + (chatGroup.chats[0].isOwner && " flex-row-reverse ")}
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

          <div className={" flex flex-col w-full px-2 " + (chatGroup.chats[0].isOwner && " items-end ")}>
            <p className="text-xs">{chatGroup.userName}</p>

            <div className={" flex flex-col mt-1 " + (chatGroup.chats[0].isOwner && " items-end ")}>
              {groupChatsByTime(chatGroup.chats).map((chatGroupTime) => (
                <ChatsByTime
                  key={`TimeChatGroup: ${chatGroupTime.time} ${chatGroup.userName} ${chatGroupTime.chats[0].id}`}
                  chatGroupsByTime={chatGroupTime}
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
