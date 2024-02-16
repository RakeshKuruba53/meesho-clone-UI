import React, { useState } from 'react';
import axios from 'axios';  
import { useAuth } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();

    console.log(username);
    console.log(password);

    // fire Request to server using axios
    const URL = 'http://localhost:8080/fp/v1/login';
    const body = {
      email: username,
      password: password,
    };
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    };

    try {
     
      const response = await axios.post(URL,body,header)
      
      if (response.status === 200) {
        console.log(response);
        const user = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticated,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration,
        }
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);
        
       
        navigate("/home");
      }

    } catch (error) {
      console.log(error);
      // Handle error, display a message, etc.
    }
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <form action='' className='bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 '>
          <h1 className='text-pink-400 flex justify-center'>
            <b>Login</b>
          </h1>
          <br />

          <input
            type='email'
            placeholder='Enter Email'
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          /><br /><br />

          <input
            type='password'
            placeholder='Enter password'
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className='border-2 text-base'
          /><br /><br />

          <button
            onClick={loginHandler}
            className='bg-pink-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
