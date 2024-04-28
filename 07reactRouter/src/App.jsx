import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Footer/>
     <Home/>
     
    </>
  )
}
// this time we will not render components through app.jsx
// instead we will do it from main.jsx
// this is because of react router dom
export default App
