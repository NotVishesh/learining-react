import React , {useContext,useState} from "react";  
import UserContext from "../context/UserContext";


function Profile() {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault() 
        setUser({username,password})
    }

  return (
    
    <div>
        <h2>
            Login
        </h2>
            <input type="text" name="" id="" placeholder="UserName"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/>
            {"   "}
    
            <input type="text" name="" id="" placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>SUbmit</button>
    </div>
  )
}

export default Profile