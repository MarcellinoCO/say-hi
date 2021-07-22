import { Chat } from "@models/Chat";
import { ChatGroupByDate } from "@models/ChatGroupByDate"

function groupChatsByDate(chats: Array<Chat>): Array<ChatGroupByDate> {
  if (!chats || chats.length === 0) return []

  // Format: 'DD MMM YYYY'.
  const dateFormatter = Intl.DateTimeFormat("en-GB", { dateStyle: "medium" })

  var groupedChat: Array<ChatGroupByDate> = []
  chats.reduce((_, currentChat, index, __) => {
    console.log(index, currentChat)

    // Get the formatted date for current chat.
    var chatDate = currentChat.createdAt.toDate()
    var chatDateString = dateFormatter.format(chatDate)

    if (index == 1) {
      // First iteration, add new member of ChatsByDate array.
      groupedChat.push({
        date: chatDateString,
        chats: [currentChat]
      })
    } else {
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
    }
    return currentChat
  })

  return groupedChat
}
export default groupChatsByDate
