import Image from "next/image"

const ProfileBadge = ({ 
  className = "",
  user = null
}: {
  className?: string,
  user: firebase.default.User | null | undefined
}) => {
  return (
    <div className={"flex flex-row-reverse items-center " + className ?? ""}>
      <Image
        width={32}
        height={32}
        src={user?.photoURL || "/icons/ic_profile.svg"}
        alt="Profile picture"
      />

      <p className="mr-2">
        {user?.displayName || "Anonymous"}
      </p>
    </div>
  )
}
export default ProfileBadge
