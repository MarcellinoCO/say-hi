import { Chat } from "@models/Chat";
import { ChatGroupByDate } from "@models/ChatGroupByDate"

function groupChatsByDate(chats: Chat[]): ChatGroupByDate[] {
  if (!chats || chats.length === 0) return []

  // Format: 'DD MMM YYYY'.
  const dateFormatter = Intl.DateTimeFormat("en-GB", { dateStyle: "medium" })

  // Insert first chat to the array.
  var groupedChat: Array<ChatGroupByDate> = []
  var firstChatDate = chats[0].createdAt.toDate()
  var firstChatDateString = dateFormatter.format(firstChatDate)
  groupedChat.push({
    date: firstChatDateString,
    chats: [chats[0]]
  })

  if (chats.length == 1) return groupedChat

  chats.reduce((_, currentChat) => {
    // Get the formatted date for current chat.
    var chatDate = currentChat.createdAt.toDate()
    var chatDateString = dateFormatter.format(chatDate)

    if (groupedChat[groupedChat.length - 1].date === chatDateString) {
      // The previous chat has the same date. Add current chat to the inner array.
      groupedChat[groupedChat.length - 1].chats.push(currentChat)
    } else {
      // The previous chat has different date.
      groupedChat.push({
        date: chatDateString,
        chats: [currentChat]
      })
    }

    return currentChat
  })

  return groupedChat
}
export default groupChatsByDate
