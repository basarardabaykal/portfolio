import { useEffect, useRef, useState } from "react"
import demo1 from "../../assets/demo1.gif"
import demo2 from "../../assets/demo2.gif"
import geyikDemo from "../../assets/geyikappdemo.gif"

function Projects() {
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
        threshold: 0.3,
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
    <div id="projects-bg" className="bg-gray-600 h-auto w-full p-40 pb-32">
      <div
        id="projects-content"
        ref={refDiv}
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="text-4xl flex justify-center mb-48">Projects</header>
        <div>
          <div id="geyikappsite" className="flex flex-col mb-64">
            <section className="ml-32 pt-8 flex flex-row">
              <img src={geyikDemo} alt="" className="h-80 mr-20" />
              <div className="flex flex-col pt-8">
                <header className="text-4xl mb-16 ml-8">
                  Geyik App Website
                </header>
                <p className="text-2xl">
                  A website introducing the mobile app "Geyik" developed with
                  technologies such as React, Tailwind, Figma in a team
                  environment.
                </p>
                <p className="text-2xl mt-8">
                  You can check it out{" "}
                  <a
                    className="text-black underline"
                    href="https://geyik.acmhacettepe.com/#indir"
                    target="_blank"
                  >
                    here
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
        <div id="authenticblindness" className="flex flex-col">
          <section className="ml-32 pt-8 flex flex-row">
            <img src={demo1} alt="as" className="h-80 mr-20" />
            <div className="flex flex-col pt-8">
              <header className="text-4xl mb-16 ml-8">
                Authentic Blindness
              </header>
              <p className="text-2xl">
                An action adventure game with fun puzzles and challenging boss
                fights made with unity.
              </p>
            </div>
          </section>
          <section className="ml-32 mt-32 mr-8 pt-8 flex flex-row">
            <p className="text-2xl pt-28 ml-28 mr-28">
              Download and try it out{" "}
              <a
                className="text-black underline"
                href="https://ardanimo.itch.io/authentic-blindness"
                target="_blank"
              >
                here
              </a>
            </p>
            <img src={demo2} alt="" className="h-80 ml-12" />
          </section>
        </div>
      </div>
      <div
        id="projects-border"
        className="bg-gray-300 w-full h-0.5 mt-64"
      ></div>
    </div>
  )
}

export default Projects
