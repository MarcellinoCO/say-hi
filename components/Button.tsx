import React from "react"
import Image from "next/image"

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

const TextButton = ({
  className = "",
  isEnabled,
  onClick,
  children = ""
}: {
  className?: string,
  isEnabled: boolean,
  onClick: () => void,
  children?: React.ReactElement | string
}) => {
  return (<>
    <div
      className={className + " cursor-default "
        + (isEnabled && " cursor-pointer transform transition-transform duration-100 hover:scale-110 ")}
      onClick={() => { isEnabled && onClick() }}
    >
      {children}
    </div>
  </>)
}

const ImageButton = ({
  className = "",
  isEnabled,
  imageSrc,
  imageSize,
  imageAlt = "",
  onClick,
}: {
  className?: string,
  isEnabled: boolean,
  imageSrc: string,
  imageSize: number,
  imageAlt?: string,
  onClick: () => void,
}) => {
  return (<>
    <div
      className={className + " cursor-default "
        + (isEnabled && " cursor-pointer transform transition-transform duration-100 hover:scale-110 ")}
      onClick={() => { isEnabled && onClick() }}
    >
      <Image
        width={imageSize}
        height={imageSize}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  </>)
}

export { FormButton, TextButton, ImageButton }
