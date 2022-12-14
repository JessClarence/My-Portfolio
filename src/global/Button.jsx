export const Button = (props) => {
  return (
    <button className={`py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 ${props.className}`}>
      {props.children}
    </button>
  )
}