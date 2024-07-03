import { useEffect, useRef, useState } from "react"
import me from "../../assets/me.jpeg"
function About() {
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
        threshold: 0.1,
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
      id="about-bg"
      className="h-auto w-full bg-gray-600 p-72 pb-32 flex flex-col justify-center text-center"
    >
      <div
        id="about-content"
        ref={refDiv}
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex content-between justify-center p-8">
          <div id="photo" className="bg-red-700 mr-32">
            <img src={me} alt="" className="h-64 w-44" />
          </div>
          <div id="bio" className="h-52 w-96 content-center">
            <p className="text-3xl">
              I am Başar Arda Baykal, a second year CS student in Hacettepe
              University and a developer in the Web team in Hacettepe ACM
              Association's R&D unit.
            </p>
          </div>
        </div>
        <header
          id="skills-header"
          className="text-4xl mt-60 mb-16 flex justify-center"
        >
          My Tech Stack
        </header>
        <div
          id="skills"
          className="grid grid-cols-3 gap-40 pl-32 pr-16 text-2xl"
        >
          <div className="text-left">
            <li>React</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
          </div>
          <div className="text-left">
            <li>Tailwind</li>
            <li>Figma</li>
            <li>Github</li>
            <li>Java</li>
          </div>
          <div className="text-left">
            <li>Python</li>
            <li>Unity</li>
            <li>C#</li>
          </div>
        </div>
      </div>
      <div id="about-border" className="bg-gray-300 w-full h-0.5 mt-64"></div>
    </div>
  )
}

export default About
