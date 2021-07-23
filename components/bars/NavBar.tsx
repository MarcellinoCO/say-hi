import ProfileBadge from "@components/ProfileBadge"
import { ImageButton, TextButton } from "@components/Button"

const NavBar = ({
  className = "",
  user,
  onProfileClicked,
  onSearchClicked
}: {
  className?: string,
  user: firebase.default.User | null | undefined,
  onProfileClicked: () => void,
  onSearchClicked: () => void
}) => {
  return (<>
    <div className={className + " flex flex-row justify-between md:justify-center items-center bg-gray-200 "}>
      <h1 className="hidden md:block font-semibold">
        👋 Say Hi!
      </h1>

      <ProfileBadge
        className="md:absolute md:left-3"

        user={user}
        onClick={onProfileClicked}
      />

      {user && (
        <ImageButton
          className="md:absolute md:right-3"

          imageSrc="/icons/ic_search.svg"
          imageSize={24}

          isEnabled={user !== null}
          onClick={onSearchClicked}
        />
      )}
    </div>
  </>)
}

export default NavBar
