import { useRef } from 'react';
import { useState, useEffect, useCallback} from 'react'


function App() {
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  
  const passRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*()_-~";

    for(let i = 0; i < length; ++i) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, character, number, passwordGenerator])

  const copyPassword = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className='w-full h-screen bg-black flex justify-center py-32 text-white'>
        <div className='bg-gray-800 px-6 py-4 h-52'>
          <div className='flex mb-10'>
            <input type="text" 
            value={password}
            className='h-10 w-48 px-4 py-1 rounded-lg outline-none text-gray-700'
            placeholder= 'Password'
            readOnly
            ref={passRef}
            />
            <button className='bg-blue-500 h-10 w-14 rounded-lg' 
            onClick={copyPassword}>Copy</button>
          </div>
          <div className='flex gap-4'>
            <div>
              <input type="range" id="lengthy" 
              min={8}
              max={100}
              onChange={(e) => {
                setLength(e.target.value)
              }}
              />
              <label htmlFor="lengthy">Length({length})</label>
            </div>
            <div>
              <input type="checkbox" id="numby" 
              onChange={() => {
                setNumber((prev) => !prev)
              }}
              /> 
              <label htmlFor="numby"> Number</label>
            </div>
            <div>
              <input type="checkbox" id="chary" 
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
               />
              <label htmlFor="chary"> Character</label>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
