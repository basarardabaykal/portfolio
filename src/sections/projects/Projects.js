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
    <div
      id="projects-bg"
      className="bg-gray-600 h-auto w-full lg:p-40 pb-32 flex flex-col justify-center"
    >
      <main className="self-center lg:text-2xl text-xl flex flex-col justify-center">
        <div
          id="projects-content"
          ref={refDiv}
          className={`transition-opacity duration-1000 flex flex-col justify-center ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <header className="lg:text-4xl text-2xl flex justify-center lg:mb-48 mb-32">
            Projects
          </header>
          <div>
            <div id="geyikappsite" className="flex flex-col lg:mb-64 mb-48">
              <section className="lg:ml-32 ml-8 pt-8 flex lg:flex-row flex-col">
                <img src={geyikDemo} alt="" className="lg:mr-20 mr-8" />
                <div className="flex flex-col pt-8">
                  <header className="lg:text-4xl text-2xl lg:mb-16 mb-8 self-center">
                    Geyik App Website
                  </header>
                  <p className>
                    A website introducing the mobile app "Geyik" developed with
                    technologies such as React, Tailwind, Figma in a team
                    environment.
                  </p>
                  <p className="lg:mt-8">
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
            <section className="lg:ml-32 ml-8 pt-8 flex lg:flex-row flex-col">
              <img src={demo1} alt="as" className="lg:mr-20 mr-8" />
              <div className="flex flex-col pt-8">
                <header className="lg:text-4xl text-2xl lg:mb-16 mb-8 self-center">
                  Authentic Blindness
                </header>
                <p className>
                  An action adventure game with fun puzzles and challenging boss
                  fights made with unity.
                </p>
              </div>
            </section>
            <section className="lg:ml-32 lg:mt-32 mt-20 mr-8 pt-8 flex lg:flex-row flex-col-reverse">
              <p className="lg:pt-28 pt-12 ml-28 mr-28">
                Download and try it out{" "}
                <a
                  className="text-black underline"
                  href="https://ardanimo.itch.io/authentic-blindness"
                  target="_blank"
                >
                  here
                </a>
              </p>
              <img src={demo2} alt="" className="lg:ml-12 ml-8" />
            </section>
          </div>
        </div>
        <div
          id="projects-border"
          className="bg-gray-300 w-4/5 self-center h-0.5 lg:mt-64 mt-32"
        ></div>
      </main>
    </div>
  )
}

export default Projects
