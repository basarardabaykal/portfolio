import './App.css';
import Projects from "./components/projects"

function App() {
  return (
    <div className="App">
      <div className='bg-slate-600 min-h-screen w-full flex flex-row'>
        <section id ="communications" className='w-1/5 flex flex-col justify-center fixed items-center h-full left-8'>
          <div id="image-div" className='bg-gray-300 w-[100px] h-[100px] rounded-xl mx-auto'><img src="" alt="me.png" /></div>
          <a id='github' href=""></a>
          <a id='linkedin' href=""></a>
          <a id='cv' href=""></a>
        </section>
        <section id = "main" className=' min-h-screen w-3/5 max-w-screen-lg mx-auto py-40 text-white text-lg'>
          <div id="intro" className='flex flex-col'>
            <div className='flex flex-row mx-auto mb-20'>
              <p>I am this and this and this and this and I do this and this and this.</p>
            </div>
            <div className='mb-20'><p>I use this and this and this</p></div>
          </div>
          <div id="experiences" className='mb-20'><p>I worked here and here and here</p></div>
          <div id='projects'>
            <Projects></Projects>
          </div>
        </section>
        <section id ="navigation" className='w-1/5 fixed right-8 flex flex-col justify-center items-center h-screen text-white'>
          <div className='bg-slate-500 rounded-xl mx-auto w-40 h-8 flex justify-center items-center my-4 shadow-xl'>
            <a href="intro" className='w-full'>Introduction</a>
          </div>
          <div className='bg-slate-500 rounded-xl mx-auto w-40 h-8 flex justify-center items-center my-4 shadow-xl'>
            <a href="experiences" className='w-full'>Experiences</a>
          </div>
          <div className='bg-slate-500 rounded-xl mx-auto w-40 h-8 flex justify-center items-center my-4 shadow-xl'>
            <a href="projects" className='w-full'>Projects</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
