import './App.css'
import Navbar from './component/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <div className='flex justify- items-center h-[80vh]'>
        <div className='flex flex-col w-5/12 ml-16'>
          <p className='text-5xl font-normal mb-8'>Explore, Learn, Evolve</p>
          <p className='text-lg'>Embark on a journey of inspiration and knowledge with our captivating blog. Immerse yourself in thought-provoking content that not only entertains but also enlightens, fostering a community of curious minds eager to explore the boundless world of ideas</p>
        </div>
        <img className='w-6/12 h-[100%]' src="src\assets\Hero-section.png" alt="" srcset="" />
      </div>
    </div>
  )
}

export default App
