import Head from "next/head"

import InputBar from "@components/bars/InputBar"
import NavBar from "@components/bars/NavBar"

import firebaseConfig from "@utils/firebaseConfig"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import { useCollectionData } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

/** Initialize Firebase app if none available */
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)

/** Global Firebase constants. */
const auth = firebase.auth()
const db = firebase.firestore()

export default function ChatPage() {
  const [user] = useAuthState(auth)

  const uploadMessage = (message: string) => {
    console.log(message)
  }

  return (<>
    <Head>
      <title>Say Hi!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="flex flex-col justify-between w-screen h-screen font-sans">
      <NavBar
        className="w-screen h-12 px-4"
        user={user}
      />

      <InputBar
        className="w-screen h-16 px-4"
        onMessageSend={uploadMessage}
      />
    </div>
  </>)
}
