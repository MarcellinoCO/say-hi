import Head from "next/head"

import Navbar from "@components/Navbar"

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

  return (
    <div>
      <Head>
        <title>Say Hi!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar user={user} />
      <div className="container mx-auto bg-green-100 w-screen h-screen">
        
      </div>
    </div>
  )
}
