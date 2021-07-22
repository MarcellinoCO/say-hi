import Image from "next/image"

const ProfileBadge = ({
  className = "",
  user = null,
  onClick = () => { }
}: {
  className?: string,
  user: firebase.default.User | null | undefined,
  onClick?: () => void
}) => {
  return (<>
    <div
      className={className + " flex flex-row-reverse items-center cursor-pointer"}
      onClick={onClick}
    >
      <Image
        width={32}
        height={32}
        src={user?.photoURL || "/icons/ic_profile.svg"}
        alt="Profile picture"
      />

      <p className="hidden md:block mr-2">
        {user?.displayName || "Anonymous"}
      </p>
    </div>
  </>)
}
export default ProfileBadge
