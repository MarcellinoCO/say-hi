import Image from "next/image"

const LoadingIndicator = ({
  className = "",
  children = ""
}: {
  className?: string,
  children?: React.ReactElement | string
}) => {
  return (<>
    <div className={className + " flex flex-col justify-center"}>
      <Image
        className="animate-spin"
        width={50}
        height={50}
        src="/icons/ic_loading.svg"
        alt="Loading icon"
      />

      <p className="mt-2">
        {children}
      </p>
    </div>
  </>)
}
export default LoadingIndicator
