import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [color, setColor] = useState("olive");

  return (

    <div
      className="w-full h-screen duration-200 flex justify-center items-center gap-5"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white px-6 py-4 rounded-2xl shadow-lg flex gap-4">
        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Red
        </button>
      </div>

      <div className="bg-white px-6 py-4 rounded-2xl shadow-lg flex gap-4">
        <button
          onClick={() => setColor("yellow")}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          yellow
        </button>
      </div>

      <div className="bg-white px-6 py-4 rounded-2xl shadow-lg flex gap-4">
        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          blue
        </button>
      </div>
    </div>

  );
}

export default App;
      
      
      
   