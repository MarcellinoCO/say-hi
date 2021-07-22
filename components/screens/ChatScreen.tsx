import { useEffect, useState } from "react"
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types"

import LoadingIndicator from "@components/LoadingIndicator"
import groupChatsByDate from "@utils/chats/groupChatsByDate"

import { Chat } from "@models/Chat"
import { ChatGroupByDate } from "@models/ChatGroupByDate"
import ChatsByDate from "@components/chats/ChatsByDate"

const ChatScreen = ({
  className = "",
  user,
  chats,
  isChatLoading = true,
}: {
  className?: string,
  user?: firebase.default.User
  chats?: Data[],
  isChatLoading: boolean
}) => {
  const [chatGroupsByDate, setChatGroupsByDate] = useState<ChatGroupByDate[]>([])

  useEffect(() => {
    // Ignore update if user is undefined, or chats array is still empty or undefined.
    if (!user || !chats) return

    // Check for first update where the createdAt field is still null.
    if (chats[chats.length - 1].createdAt == null) return

    // Convert raw data from Firestore to a Chat array.
    var chatsData: Chat[] = []
    chats?.forEach((doc) => {
      chatsData.push({
        id: doc.id,
        message: doc.message,
        createdAt: doc.createdAt,
        userId: doc.userId,
        userName: doc.userName,
        userPhoto: doc.userPhoto,
        isOwner: user?.displayName == doc.userId
      })
    })

    // Update state.
    setChatGroupsByDate(groupChatsByDate(chatsData))
  }, [user, chats])

  return (<>
    <div className={className + " overflow-y-auto flex flex-col justify-center items-center bg-gray-400"}>
      {chatGroupsByDate ? (
        <ChatsByDate
          className="p-4"
          chatGroupsByDate={chatGroupsByDate}
        />
      ) : null}

      {!isChatLoading ? (
        null
      ) : (
        <LoadingIndicator>
          Loading chats...
        </LoadingIndicator>
      )}
    </div>
  </>)
}
export default ChatScreen
