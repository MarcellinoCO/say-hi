export type Chat = {
  id: string,
  message: string,
  createdAt: firebase.default.firestore.Timestamp,
  userId: string,
  userName: string,
  userPhoto: string,
  isOwner?: boolean
}
