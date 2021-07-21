import ProfileBadge from "./ProfileBadge"

const Navbar = ({
  className = "",
  user = null
}: {
  className?: string,
  user: firebase.default.User | null | undefined
}) => {
  return (
    <div className={`${className ?? ""} flex flex-row justify-between md:justify-center items-center w-screen h-12 px-4 bg-gray-200`}>
      <h1 className="font-sans font-semibold">
        👋 Say Hi!
      </h1>

      <ProfileBadge
        className="md:absolute md:right-3"
        user={user}
      />
    </div>
  )
}
export default Navbar
