import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("lgiht","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    
     <ThemeProvider value ={(themeMode,lightTheme,darkTheme)}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                          <Card/>
                    </div>
                </div>
            </div>

            </ThemeProvider> 
  )
}

export default App
// you have to always wrap your div in theme provider or usercontext provider
// or you have to wrap app around theme in main.jsx to use this context property

// only wrapping does not help you also have to pass the values that have to be used