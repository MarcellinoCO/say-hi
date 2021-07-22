import { useEffect, useState } from "react"

import { Chat } from "@models/Chat"
import { ChatGroupByDate } from "@models/ChatGroupByDate"
import { ChatGroupByUser } from "@models/ChatGroupByUser"

import ChatsByUser from "./ChatsByUser"
import DateHeader from "./DateHeader"
import groupChatsByUser from "@utils/chats/groupChatsByUser"

const ChatsByDate = ({
  className = "",
  chatGroupsByDate
}: {
  className?: string,
  chatGroupsByDate: ChatGroupByDate[]
}) => {
  return (<>
    <div className={className + " flex flex-col w-full h-full"}>
      {chatGroupsByDate?.map((chatGroup) => (
        <div
          key={chatGroup.date}
          className="flex flex-col items-center"
        >
          <DateHeader
            className="mt-4"
            dateString={chatGroup.date}
          />

          <ChatsByUser
            className="w-full"
            chatGroupsByUser={groupChatsByUser(chatGroup.chats)}
          />
        </div>
      ))}
    </div>
  </>)
}
export default ChatsByDate
