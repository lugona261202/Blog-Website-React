import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData  } from 'react-router-dom'

function Github() {
    const data =useLoaderData()
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(Response => Response.json)
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])

    return (
        <div className='text-center m-4 bg-gray-600 text-white
        p-4 text-3xl'>Github followers : {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}/></div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json
}
// useEffect is like a constuctor as soon as the page is rendered 
// it is the first command that initializes everything

// this github info loader is a method which needs to be declared to use loader in main.jsx
// due to loader even if line 8-15 does not exist still follower will be shown with help of loader