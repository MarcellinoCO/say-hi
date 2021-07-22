import { useEffect, useState } from "react"
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types"

import { Chat } from "@models/Chat"
import { ChatGroupByDate } from "@models/ChatGroupByDate"

import ChatsByDate from "@components/chats/ChatsByDate"
import LoadingIndicator from "@components/LoadingIndicator"

import groupChatsByDate from "@utils/chats/groupChatsByDate"

const ChatScreen = ({
  className = "",
  user,
  chats,
  isChatLoading,
}: {
  className?: string,
  user: firebase.default.User | undefined
  chats: Data[] | undefined,
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

        isOwner: user?.displayName == doc.userName
      })
    })

    // Update state.
    setChatGroupsByDate(groupChatsByDate(chatsData))
  }, [user, chats])

  return (<>
    <div className={className + " overflow-y-auto flex flex-col justify-center items-center pb-4 bg-gray-300 "}>
      {!isChatLoading ? (
        chatGroupsByDate && (
          <ChatsByDate
            className="px-4 pb-4"
            chatGroupsByDate={chatGroupsByDate}
          />
        )
      ) : (
        <LoadingIndicator>
          Loading chats...
        </LoadingIndicator>
      )}
    </div>
  </>)
}

export default ChatScreen
