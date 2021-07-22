import { Data } from "react-firebase-hooks/firestore/dist/firestore/types"
import Image from "next/image"

const ChatScreen = ({
  className = "",
  chats,
  isChatLoading = true,
}: {
  className?: string,
  chats: Data[] | undefined,
  isChatLoading: boolean
}) => {
  return (<>
    <div className={className + " flex flex-col justify-center items-center bg-gray-400"}>
      {chats && chats.map((chat) => <p key={chat.id}>{chat.message + " from " + chat.userName}</p>)}

      { !isChatLoading ? (
        null
      ) : (
        <Image
          className="animate-spin"
          width={50}
          height={50}
          src="/icons/ic_loading.svg"
          alt="Loading icon"
        />
      ) }
    </div>

    { isChatLoading && <p>Loading...</p> }
  </>)
}
export default ChatScreen
