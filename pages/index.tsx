import { useState } from "react"
import Head from "next/head"

import firebaseConfig from "@utils/firebaseConfig"
import Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import { useAuthState } from "react-firebase-hooks/auth"

import InputBar from "@components/bars/InputBar"
import NavBar from "@components/bars/NavBar"
import SearchBar from "@components/bars/SearchBar"
import ChatScreen from "@components/screens/ChatScreen"
import SignInScreen from "@components/screens/SignInScreen"

/** Initialize Firebase app if none available */
if (!Firebase.apps.length) Firebase.initializeApp(firebaseConfig)

/** Global Firebase constants. */
const auth = Firebase.auth()
const db = Firebase.firestore()

export default function ChatPage() {
  // Authentication logic.
  const [user] = useAuthState(auth)
  const signInWithGoogle = async () => {
    if (user) return false

    const provider = new Firebase.auth.GoogleAuthProvider()
    return auth.signInWithPopup(provider)
      .then((_) => {
        return true
      }).catch((_) => {
        return false
      })
  }

  const signOut = () => {
    if (user) auth.signOut()
  }

  // Database logic.
  const chatsRef = db.collection("chats")
  const uploadMessage = async (message: string) => {
    if (!auth.currentUser) return

    const { uid, displayName, photoURL } = auth.currentUser
    chatsRef.add({
      createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
      message: message,
      userId: uid,
      userName: displayName,
      userPhoto: photoURL
    })
  }

  // Search logic.
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string[]>([])

  return (<>
    <Head>
      <title>Say Hi!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="flex flex-col justify-between w-screen h-screen font-sans">
      {isSearching ? (
        <SearchBar
          className="w-screen h-14 px-4"
          isEnabled={true}

          onSearch={(query: string) => setSearchQuery(query.split(" "))}
          onClose={() => {
            setSearchQuery([])
            setIsSearching(false)
          }}
        />
      ) : (
        <NavBar
          className="w-screen h-14 px-4"

          user={user}
          onProfileClicked={signOut}
          onSearchClicked={() => setIsSearching(true)}
        />
      )}

      {user ? (
        <ChatScreen
          className="w-full h-full"

          user={user}
          searchQuery={searchQuery}
        />
      ) : (
        <SignInScreen
          className="w-full h-full"
          onSignIn={signInWithGoogle}
        />
      )}

      <InputBar
        className="w-screen h-20 px-4"
        isEnabled={true}
        onMessageSend={uploadMessage}
      />
    </div>
  </>)
}
