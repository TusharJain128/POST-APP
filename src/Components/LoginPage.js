import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Login(){

  const [ email, setEmail] = useState("")
  const [ password, setPassword]= useState("")
  const navigate = useNavigate()

  const LoginUser= async function(event){
    event.preventDefault()
    await axios.post('http://localhost:3001/loginUser', {email,password})
    .then((res)=>{
      alert('account login successfully')
      navigate('/Post')
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
  }
  
    return(
        <>
        <form onSubmit={LoginUser}>
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