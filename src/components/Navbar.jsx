import {Link} from "react-router-dom";
import {useState} from "react";

export const Navbar = () => {
  const [click, setClick] = useState(true)
  const burgerClick = () => {
    setClick(prev => !prev)
  }
  return (
    <>
      <nav className="bg-gradient-to-r from-red-600 to-blue-900 md:flex p-8 md:justify-around text-white">
        <div className="flex justify-between">
          <Link to="/"><h1 className="mr-16 text-3xl font-black text-red-500 border-b-2 border-red-900 hover:text-blue-500">JESS ARREZA</h1></Link>
          <div className="md:hidden cursor-pointer" onClick={burgerClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
        <div className={`${click && "hidden"} md:block text-right`}>
          <Link to="/" className="px-3 hover:text-red-500 block md:inline-flex">Home</Link>
          <Link to="/Resume" className="px-3 hover:text-red-500 block md:inline-flex">Resume</Link>
          <Link to="/Portfolio" className="px-3 hover:text-red-500 block md:inline-flex">Portfolio</Link>
        </div>
      </nav>
    </>
  )
}