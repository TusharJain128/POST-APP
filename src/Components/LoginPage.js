import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Login(){

  const [ email, setEmail] = useState("")
  const [ password, setPassword]= useState("")
  const navigate = useNavigate()
  
    return(
        <>
        <form>
          <div>
            <label>Email  </label>
            <input id="email" type= "text" placeholder="Enter your Email" value={email} onChange={(e=>setEmail(e.target.value))}/>
          </div>
          <div>
            <label>Password  </label>
            <input id= "password" type= "text" placeholder="Enter your Password" value={password} onChange={(e=>setPassword(e.target.value))}/>
          </div>
          <div>
            <button id="submit" type= "submit">Sign in</button>
          </div>
        </form>
        </>
    )
}