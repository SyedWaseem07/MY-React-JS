import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button className='outline-none px-4 bg-red-600 rounded-xl py-2 text-white' onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 bg-green-600 rounded-xl py-2 text-white' onClick={() => setColor("Green")}>Green</button>
          <button className='outline-none px-4 bg-blue-600 rounded-xl py-2 text-white' onClick={() => setColor("blue")}>blue</button>
          <button className='outline-none px-4 bg-black rounded-xl py-2 text-white' onClick={() => setColor("black")}>black</button>
          <button className='outline-none px-4 bg-yellow-600 rounded-xl py-2 text-white' onClick={() => setColor("yellow")}>Yellow</button>
          <button className='border-x-2 border-y-2 px-4 bg-white rounded-xl py-2 text-black' onClick={() => setColor("white")}>White</button>
          <button className='outline-none px-4 bg-purple-600 rounded-xl py-2 text-white' onClick={() => setColor("purple")}>purple</button>
          <button className='outline-none px-4 bg-gray-600 rounded-xl py-2 text-white' onClick={() => setColor("gray")}>Gray</button>
        </div>
      </div>
    </div>
  )
}

export default App
