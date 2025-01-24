import './App.css';
import Card from "./components/card"

function App() {
  return (
    <div className="App">
      <div className='bg-gray-600 min-h-screen w-full'>
        <div className='bg-gray-500 min-h-screen max-w-screen-lg mx-auto py-40'>
          <section id="intro" className='flex flex-col'>
            <div className='flex flex-row mx-auto mb-20'>
              <div id="image-div" className='bg-gray-300 w-[100px] h-[100px] rounded-xl'><img src="" alt="me.png" /></div>
              <p>I am this and this and this and this and I do this and this and this.</p>
            </div>
            <div className='mb-20'><p>I use this and this and this</p></div>
            <div className='mb-20'><p>I worked here and here and here</p></div>
          </section>
          <section id='projects'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </section>
          <section id='communication'>
            You can connect with me here and here
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
