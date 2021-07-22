import { Chat } from "@models/Chat"
import { ChatGroupByUser } from "@models/ChatGroupByUser"

function groupChatsByDate(chats: Chat[]): ChatGroupByUser[] {
  if (!chats || chats.length === 0) return []

  // Insert first chat to array.
  var groupedChat: Array<ChatGroupByUser> = []
  groupedChat.push({
    userName: chats[0].userName,
    userPhoto: chats[0].userPhoto,
    chats: [chats[0]]
  })

  if (chats.length == 1) return groupedChat

  chats.reduce((_, currentChat) => {
    if (groupedChat[groupedChat.length - 1].userName === currentChat.userName) {
      // The previous chat has the same sender. Add current chat to the inner array.
      groupedChat[groupedChat.length - 1].chats.push(currentChat)
    } else {
      // The previous chat has different sender.
      groupedChat.push({
        userName: currentChat.userName,
        userPhoto: currentChat.userPhoto,
        chats: [currentChat]
      })
    }
    return currentChat
  })
  
  return groupedChat
}
export default groupChatsByDate
