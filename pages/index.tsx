import Head from "next/head"

import InputBar from "@components/bars/InputBar"
import NavBar from "@components/bars/NavBar"
import ChatScreen from "@components/screens/ChatScreen"
import SignInScreen from "@components/screens/SignInScreen"

import firebaseConfig from "@utils/firebaseConfig"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import { useCollectionData } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react"

/** Initialize Firebase app if none available */
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

/** Global Firebase constants. */
const auth = firebase.auth()
const db = firebase.firestore()

export default function ChatPage() {
  // Authentication logic.
  const [user] = useAuthState(auth)
  const signInWithGoogle = async () => {
    if (user) return false
    const provider = new firebase.auth.GoogleAuthProvider()

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
  const query = chatsRef.orderBy("createdAt")
  const [chats, isChatLoading] = useCollectionData(query, { idField: "id" })

  const uploadMessage = (message: string) => {
    if (!auth.currentUser) return

    const { uid, displayName, photoURL } = auth.currentUser
    chatsRef.add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      message: message,
      userId: uid,
      userName: displayName,
      userPhoto: photoURL
    })
  }

  return (<>
    <Head>
      <title>Say Hi!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="flex flex-col justify-between w-screen h-screen font-sans">
      <NavBar
        className="w-screen h-14 px-4"
        user={user}
        onProfileClicked={signOut}
      />

      {user ? (
        <ChatScreen
          className="w-full h-full"
          chats={chats}
          isChatLoading={isChatLoading}
        />
      ) : (
        <SignInScreen
          className="w-full h-full"
          onSignIn={signInWithGoogle} />
      )}

      <InputBar
        className="w-screen h-20 px-4"
        isEnabled={true}
        onMessageSend={uploadMessage}
      />
    </div>
  </>)
}
