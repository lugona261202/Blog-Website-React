import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [username, setUsername] = useState('')
    
    const {setUser} = useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUsesr({username,password})
    }

    return (
        =<div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        <input type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
       </div> 
    )
}

export default Login
