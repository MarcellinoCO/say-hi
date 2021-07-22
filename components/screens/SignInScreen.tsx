import { FormEventHandler, useState } from "react"

import { FormButton } from "@components/Button"
import LoadingIndicator from "@components/LoadingIndicator"

const SignInScreen = ({
  className = "",
  onSignIn
}: {
  className?: string,
  onSignIn: () => Promise<boolean>
}) => {
  const [isSigningIn, setIsSigningIn] = useState(false)

  const signIn: FormEventHandler = async (event) => {
    event.preventDefault()
    setIsSigningIn(true)

    setIsSigningIn(await onSignIn())
  }

  return (<>
    <div className={"flex flex-col justify-center items-center " + className}>
      {isSigningIn && (
        <LoadingIndicator />
      )}

      <form
        className="self-center mt-4"
        onSubmit={signIn}
      >
        <FormButton
          className="h-12 px-4 text-lg font-semibold bg-blue-400"
          isEnabled={!isSigningIn}
        >
          Sign in with Google
        </FormButton>
      </form>
    </div>
  </>)
}
export default SignInScreen
