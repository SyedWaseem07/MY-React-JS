import Receiver from './Receiver.jsx'

function App() {
  let age = 21;
  let myObj = {
    name : 'React',
    year : 2013
  }
  return (
    <>
      {/* <h1>I am from app</h1> */}
      <Receiver name = {myObj.name} year = {myObj.year} />  
    </>
  )
}

export default App
