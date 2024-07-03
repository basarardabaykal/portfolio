import linkedin from "../../assets/linkedinlogo.png"
import github from "../../assets/githublogo.png"
import { useEffect, useRef, useState } from "react"
function Contacts() {
  const [isVisible, setIsVisible] = useState(false)
  const refDiv = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.6,
      }
    )

    if (refDiv.current) {
      observer.observe(refDiv.current)
    }

    return () => {
      if (refDiv.current) {
        observer.unobserve(refDiv.current)
      }
    }
  }, [])

  return (
    <div
      id="contacts-bg"
      className="bg-gray-600 h-auto w-full p-52 pt-56 flex flex-col justify-center items-center"
    >
      <div
        id="contacts-content"
        ref={refDiv}
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="text-4xl mb-28 ml-8">Contact Me</header>
        <div className="flex flex-col items-start text-2xl">
          <p className="mb-8">basarda2828@gmail.com</p>
          <p>+90 506 191 083</p>
        </div>
        <div className="flex mt-20 mr-4">
          <a
            href="https://www.linkedin.com/in/başar-arda-baykal-337530249/"
            target="_blank"
            className="mr-16"
          >
            <img src={linkedin} alt="" className="h-24" />
          </a>
          <a href="https://github.com/ardanimo" target="_blank">
            <img src={github} alt="" className="h-20" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Contacts
