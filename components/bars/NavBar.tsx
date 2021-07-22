import ProfileBadge from "@components/ProfileBadge"

const NavBar = ({
  className = "",
  user,
  onProfileClicked
}: {
  className?: string,
  user: firebase.default.User | null | undefined,
  onProfileClicked: () => void
}) => {
  return (<>
    <div className={className + " flex flex-row justify-between md:justify-center items-center bg-gray-200 "}>
      <h1 className="font-semibold">
        👋 Say Hi!
      </h1>

      <ProfileBadge
        className="md:absolute md:right-3"
        
        user={user}
        onClick={onProfileClicked}
      />
    </div>
  </>)
}
export default NavBar
