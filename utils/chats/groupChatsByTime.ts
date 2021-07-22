import { Chat } from "@models/Chat";
import { ChatGroupByTime } from "@models/ChatGroupByTime"

function groupChatsByTime(chats: Chat[]): ChatGroupByTime[] {
  if (!chats || chats.length === 0) return []

  // Format: 'HH:mm'.
  const timeFormatter = Intl.DateTimeFormat("en-GB", { timeStyle: "short" })

  // Insert first chat to the array.
  var groupedChat: ChatGroupByTime[] = []
  var firstChatTime = chats[0].createdAt.toDate()
  var firstChatTimeString = timeFormatter.format(firstChatTime)
  groupedChat.push({
    time: firstChatTimeString,
    chats: [chats[0]]
  })

  if (chats.length > 1) {
    chats.reduce((_, currentChat) => {
      // Get the formatted time for current chat.
      var chatTime = currentChat.createdAt.toDate()
      var chatTimeString = timeFormatter.format(chatTime)

      if (groupedChat[groupedChat.length - 1].time === chatTimeString) {
        // The previous chat has the same time. Add current chat to the inner array.
        groupedChat[groupedChat.length - 1].chats.push(currentChat)
      } else {
        // The previous chat has different time.
        groupedChat.push({
          time: chatTimeString,
          chats: [currentChat]
        })
      }
      return currentChat
    })
  }

  return groupedChat
}
export default groupChatsByTime
