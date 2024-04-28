import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}= useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl
        p-4'>User: {userid}</div>
    )
}

export default User
// here we are trying to create a new path
// and then what every id we use in path it should also be displayed on page
// for that we use all this userid , useparams
