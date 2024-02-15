import React, { useState } from 'react'

const Register = ({role}) => {

const[username,setUsername]=useState("")

const[password,setPassword]=useState("")
const respond = (event) =>{
  event.preventDefault();
  console.log(username);
  console.log(password);
  console.log(role);
}
 

return (
<div className='flex items-center justify-center h-screen bg-amber-100'>
    <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
    <h1 className='text-pink-400 flex justify-center'><b>Registration Form</b></h1><br />

Email <input type="text" placeholder='Enter your Email' onChange={(event)=>setUsername(event.target.value)}
className='border-2 text-base'/><br/><br />
Password <input type="text" placeholder=' Enter password' onChange={(event)=>setPassword(event.target.value)}
className='border-2 text-base'/><br/><br />
<button onClick={respond}  className="bg-pink-400  hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>RequestOtp</button>
    </form>
  </div>

  
  
)
}
export default Register