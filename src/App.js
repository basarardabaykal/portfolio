import './App.css';
import Projects from "./components/projects"

function App() {
  return (
    <div className="App">
      <div className='bg-slate-600 min-h-screen w-full flex flex-row'>
        <section id ="communications" className='w-1/5 flex flex-col justify-center fixed items-center h-full left-8'>
          <div className='bg-gray-300 w-[100px] h-[100px] rounded-full mx-auto overflow-hidden my-4'><img src="/me.jpeg" alt="me.png" /></div>
          <a id='cv' href="" className='w-[60px] h-[60px] rounded-full mx-auto my-2'>
            <img src="/cv.png" alt="" /> {/* Icon made by Freepik from www.flaticon.com */}</a>
          <a id='linkedin' target='_blank' href="https://www.linkedin.com/in/ba%C5%9Far-arda-baykal-337530249/" className='w-[60px] h-[60px] rounded-full mx-auto my-2'>
          <img src="/linkedin.png" alt="" /></a>
          <a id='github' href="https://github.com/basarardabaykal" target='_blank' className='w-[60px] h-[60px] rounded-full overflow-hidden mx-auto my-2'>
            <img src="/github.png" alt="" /></a>
        </section>
        <section id = "main" className=' min-h-screen w-3/5 max-w-screen-md mx-auto py-40 text-white text-lg'>
          <div id="intro" className='flex flex-col'>
            <div className='flex flex-row mx-auto my-20'>
              <p>Hi! I am Başar Arda Baykal. I'm a second year CS student in Hacettepe University.
                I'm a constant learner who is currently interested in full stack web development.
                I have contributed to a lot of different projects both personal and together with different student associations.
              </p>
            </div>
            <div className='my-20'>
              <p className='text-xl mb-12'>My Tech Stack</p>
              <div className='grid grid-cols-4 gap-2'>
                <ul>React</ul>
                <ul>Tailwind</ul>
                <ul>Next.js</ul>
                <ul>Firebase</ul>
                <ul>Typescript</ul>
                <ul>Javascript</ul>
                <ul>Figma</ul>
                <ul>Github</ul>
                <ul>HTML</ul>
                <ul>CSS</ul>
                <ul>Java</ul>
                <ul>Javafx</ul>
                <ul>Python</ul>
                <ul>C++</ul>
                <ul>Unity</ul>
                <ul>C#</ul>
              </div>
            </div>
          </div>
          <div id="experiences" className='my-20 px-12'>
            <p className='text-xl mb-12'>My Experiences</p>
            <div className='flex flex-row justify-evenly mb-20'>
              <p className='max-w-40'>Hacettepe Araştırma ve Geliştirme Topluluğu</p>
              <div className='my-auto flex flex-col'>
                <p>Head of Web Unit</p>
                <p>(August 2024 - Currently)</p>
              </div>
            </div>
            <div className='flex flex-row justify-evenly mt-16'>
              <p className='max-w-40'>ACM Hacettepe Öğrenci Topluluğu</p>
              <div className='my-auto flex flex-col'>
                <p>Web Developer</p>
                <p>(December 2023 - Currently)</p>
              </div>
            </div>
          </div>
          <div id='projects' className='mt-40'>
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
