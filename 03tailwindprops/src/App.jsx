import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "hitesh",
    age:23
  }
// just like myobj was passed , in similar way an array can also be passed but make sure to use 
// <Cards channel ="chaiaurcode" someObje={myObj}/>
  return (
    <>
     <h1 className ='bg-green-400 text-black p-4 
     rounded-xl mb-4'>tailwind test</h1>

     <Cards username ="chaiaurcode" btntext="click me"/>
     <Cards username = "harshit" btntext="use me"/>
    </>
  )
}
// every change in props has to be passed and also need to be changed in cards.jsx
export default App
