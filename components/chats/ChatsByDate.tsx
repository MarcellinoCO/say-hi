import { ChatGroupByDate } from "@models/ChatGroupByDate"

const ChatsByDate = ({
  className = "",
  chatGroupsByDate
}: {
  className?: string,
  chatGroupsByDate?: ChatGroupByDate[]
}) => {
  return (<>
    <div className={className + " overflow-y-auto flex flex-col w-full h-full"}>
      {chatGroupsByDate?.map((chatGroup) => (
        <div key={chatGroup.date}>
          <p className="sticky top-0">{chatGroup.date}</p>
          {chatGroup.chats.map((chat) => <p key={chat.id}>{chat.message + " from " + chat.userName + " at " + chat.createdAt.toDate()}</p>)}
        </div>
      ))}
    </div>
  </>)
}
export default ChatsByDate
