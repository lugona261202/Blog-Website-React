import Login from "./components/Login"
import UserContextProvider from "./context/UserContextProvider"
function App() {
  

  return (
    <UserContextProvider>
      <h1>react with chai </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
