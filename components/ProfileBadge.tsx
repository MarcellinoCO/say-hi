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
      <div
        className={"flex rounded-full border-2 border-dashed border-gray-800 "
          + (user && "transform transition-transform duration-100 hover:scale-110 ")}
      >
        <Image
          className="rounded-full"
          width={28}
          height={28}
          src={user?.photoURL || "/icons/ic_profile.svg"}
          alt="Profile picture"
        />
      </div>

      <p className="hidden md:block mr-2">
        {user?.displayName || "Anonymous"}
      </p>
    </div>
  </>)
}
export default ProfileBadge
