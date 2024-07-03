import "./App.css"
import About from "./sections/about/About"
import Projects from "./sections/projects/Projects"
import Contacts from "./sections/contacts/Contacts"
import Sidebar from "./sections/sidebar/Sidebar"

function App() {
  return (
    <div className="bg-black flex flex-col justify-center h-full w-full text-white">
      <About></About>
      <Projects></Projects>
      <Contacts></Contacts>
      <Sidebar></Sidebar>
    </div>
  )
}

export default App
