import { ChatGroupByDate } from "@models/ChatGroupByDate"

import ChatsByUser from "@components/chats/ChatsByUser"
import DateHeader from "@components/chats/DateHeader"

import groupChatsByUser from "@utils/chats/groupChatsByUser"

const ChatsByDate = ({
  className = "",
  chatGroupsByDate,
  searchQuery
}: {
  className?: string,
  chatGroupsByDate: ChatGroupByDate[],
  searchQuery?: string[]
}) => {
  return (<>
    <div className={className + " flex flex-col w-full h-full "}>
      {chatGroupsByDate.map((chatGroup) => (
        <div
          key={`DateChatGroup: ${chatGroup.date}`}
          className="flex flex-col items-center"
        >
          <DateHeader
            key={`DateHeader: ${chatGroup.date}`}
            className="mt-4"

            dateString={chatGroup.date}
          />

          <ChatsByUser
            className="w-full"
            
            chatGroupsByUser={groupChatsByUser(chatGroup.chats)}
            searchQuery={searchQuery}
          />
        </div>
      ))}
    </div>
  </>)
}

export default ChatsByDate
