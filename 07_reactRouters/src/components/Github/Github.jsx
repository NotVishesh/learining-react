import React,{useState,useEffect}   from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'



function Github() {

    const user = useLoaderData()
//    const [user, setUser] = useState([])
//     const {username} = useParams()
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then((data)=> data.json())
    //     .then((data) => setUser(data))
       
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 p-4 text-3xl'>Github  :{user.followers} 
    
    <img src= {user.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubUserInfo = async ({params})=>{
    // const {username} = useParams()
    const {username} = params

    const res = await fetch(`https://api.github.com/users/${username}`)
    return res.json()
}