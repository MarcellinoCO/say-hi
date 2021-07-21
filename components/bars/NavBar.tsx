import ProfileBadge from "@components/ProfileBadge"

const NavBar = ({
  className = "",
  user = null
}: {
  className?: string,
  user: firebase.default.User | null | undefined
}) => {
  return (<>
    <div className={"flex flex-row justify-between md:justify-center items-center bg-gray-200 " + className}>
      <h1 className="font-semibold">
        👋 Say Hi!
      </h1>

      <ProfileBadge
        className="md:absolute md:right-3"
        user={user}
      />
    </div>
  </>)
}
export default NavBar
