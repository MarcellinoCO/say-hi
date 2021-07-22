const DateHeader = ({
  className = "",
  dateString = ""
}: {
  className?: string,
  dateString?: string
}) => {
  return (<>
    <div className={className + " sticky top-4 px-2 text-medium bg-gray-200 rounded-full shadow"}>
      {dateString}
    </div>
  </>)
}
export default DateHeader
