import { useState } from "react"
import About from "../about/About"

function Sidebar() {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="sidebar-button"
        className="fixed top-0 left-0 w-12 h-12 ml-4 mt-4 flex flex-col"
      >
        <div className="bg-white h-1 w-12 mt-2 mb-1"></div>
        <div className="bg-white h-1 w-12 mt-2 mb-1"></div>
        <div className="bg-white h-1 w-12 mt-2 mb-2"></div>
      </div>
      <div
        id="sidebar-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 bg-gray-700 h-full transition-all duration-1000 ${
          isHovering ? "w-64" : "w-0"
        }`}
      >
        <div
          className={`transition-opacity duration-1000 flex flex-col justify-center text-center ${
            isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <a href="#about-bg" className="text-white text-3xl mb-12 mt-16">
            About
          </a>
          <a href="#projects-bg" className="text-white text-3xl mb-12">
            Projects
          </a>
          <a href="#contacts-bg" className="text-white text-3xl ">
            Contact
          </a>
        </div>
      </div>
    </>
  )
}
export default Sidebar