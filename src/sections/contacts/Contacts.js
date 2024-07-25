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
      className="bg-gray-600 h-auto w-full lg:p-52 p-40 lg:pt-56 flex flex-col justify-center items-center"
    >
      <main className="lg:text-2xl text-xl">
        <div
          id="contacts-content"
          ref={refDiv}
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <header className="lg:text-4xl text-2xl lg:mb-28 mb-20 text-center">
            Contact Me
          </header>
          <div className="flex flex-col items-start">
            <p className="mb-8">basarda2828@gmail.com</p>
            <p>+90 506 191 083</p>
          </div>
          <div className="flex mt-20 mr-4">
            <a
              href="https://www.linkedin.com/in/başar-arda-baykal-337530249/"
              target="_blank"
              className="mr-16"
            >
              <img src={linkedin} alt="" className="lg:h-24 h-20" />
            </a>
            <a href="https://github.com/ardanimo" target="_blank">
              <img src={github} alt="" className="lg:h-20 h-16" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Contacts
