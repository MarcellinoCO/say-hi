import React from "react"

const FormButton = ({
  className = "",
  isEnabled,
  children = ""
}: {
  className?: string,
  isEnabled: boolean,
  children?: React.ReactElement | string
}) => {
  return (<>
    <button
      className={className + " rounded-full border-2 border-gray-800 "
        + (isEnabled && " transform transition-transform duration-100 hover:scale-110 ")
        + (!isEnabled && " filter grayscale cursor-default ")}

      disabled={!isEnabled}
      type="submit"
    >
      {children}
    </button>
  </>)
}

export { FormButton }
