import './App.css';
import Projects from "./components/projects"

function App() {
  return (
    <div className="App">
      <div className='min-h-screen w-full flex flex-row' style={{ background: 'radial-gradient(ellipse, rgba(31, 45, 55, 1) 0%, rgba(100, 116, 138, 1) 100%)' }}>
        <section id ="communications" className='w-1/5 flex flex-col justify-center fixed items-center h-full left-8'>
          <div className='bg-gray-300 w-[100px] h-[100px] rounded-full mx-auto overflow-hidden my-4  shadow-xl'><img src="/me.jpeg" alt="me.png" /></div>
          <a id='cv' href="" className='w-[60px] h-[60px] rounded-full mx-auto my-2 shadow-xl'>
            <img src="/cv.png" alt="" /> {/* Icon made by Freepik from www.flaticon.com */}</a>
          <a id='linkedin' target='_blank' href="https://www.linkedin.com/in/ba%C5%9Far-arda-baykal-337530249/"
           className='w-[55px] h-[55px] mx-auto my-2 overflow-hidden shadow-xl'>
          <img src="/linkedin.png" alt="" /></a>
          <a id='github' href="https://github.com/basarardabaykal" target='_blank' 
           className='w-[60px] h-[60px] rounded-full overflow-hidden mx-auto my-2  shadow-xl'>
            <img src="/github.png" alt="" /></a>
        </section>
        <section id = "main" className=' min-h-screen w-3/5 max-w-screen-md mx-auto py-40 text-white text-lg'>
          <div id="intro" className='flex flex-col'>
            <div className='flex flex-row mx-auto'>
              <p>Hi! I am Başar Arda Baykal. I'm a second year CS student in Hacettepe University.
                I'm a constant learner who is currently interested in full stack web development.
                I have contributed to a lot of different projects both personal and together with different student associations.
              </p>
            </div>
            <div className='mt-16 pb-20 border-b-[0.5px] border-gray-400'>
              <p className='text-xl mb-8'>My Tech Stack</p>
              <ul className='grid grid-cols-4 gap-2 list-disc pl-24'>
                <li className='text-left'>React</li>
                <li className='text-left'>Tailwind</li>
                <li className='text-left'>Next.js</li>
                <li className='text-left'>Firebase</li>
                <li className='text-left'>Typescript</li>
                <li className='text-left'>Javascript</li>
                <li className='text-left'>Figma</li>
                <li className='text-left'>Github</li>
                <li className='text-left'>HTML</li>
                <li className='text-left'>CSS</li>
                <li className='text-left'>Java</li>
                <li className='text-left'>Javafx</li>
                <li className='text-left'>Python</li>
                <li className='text-left'>C++</li>
                <li className='text-left'>Unity</li>
                <li className='text-left'>C#</li>
              </ul>
            </div>
          </div>
          <div id="experiences" className='mt-16 px-12 pb-20 border-b-[0.5px] border-gray-400'>
            <p className='text-xl mb-12'>My Experiences</p>
            <div className='flex flex-row justify-evenly mb-20'>
              <p className='max-w-64'>Hacettepe Araştırma ve Geliştirme Topluluğu</p>
              <div className='my-auto flex flex-col'>
                <p>Head of Web Unit</p>
                <p>(August 2024 - Currently)</p>
              </div>
            </div>
            <div className='flex flex-row justify-evenly mt-16'>
              <p className='max-w-64'>ACM Hacettepe Öğrenci Topluluğu</p>
              <div className='my-auto flex flex-col'>
                <p>Web Developer</p>
                <p>(December 2023 - Currently)</p>
              </div>
            </div>
          </div>
          <div id='projects' className='mt-20'>
            <p className='text-xl mb-12'>My Projects</p>
            <Projects></Projects>
          </div>
        </section>
        <section id ="navigation" className='w-1/5 fixed right-8 flex flex-col justify-center items-center h-screen text-white'>
          <div className='bg-slate-500 rounded-xl mx-auto w-40 h-8 flex justify-center items-center my-4 shadow-xl'>
            <a href="#intro" className='w-full'>Introduction</a>
          </div>
          <div className='bg-slate-500 rounded-xl mx-auto w-40 h-8 flex justify-center items-center my-4 shadow-xl'>
            <a href="#experiences" className='w-full'>Experiences</a>
          </div>
          <div className='bg-slate-500 rounded-xl mx-auto w-40 h-8 flex justify-center items-center my-4 shadow-xl'>
            <a href="#projects" className='w-full'>Projects</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
