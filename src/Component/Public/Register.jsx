import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({role}) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleRegistration = async (event) => {
    event.preventDefault();

   
    console.log(username);
    console.log(password);

    // fire Request to server using axios
    const URL = 'http://localhost:8080/fp/v1/register';
    const body = {
      email: username,
      password: password,
      userRole: role,
    };
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    try {
      const response = await axios.post(URL, body, header);
      console.log(response);

      // Save email to sessionStorage after successful registration
      sessionStorage.setItem('userEmail', username);


      // Navigate to the "/verifyotp" route
      navigate('/verifyotp');
    } catch (error) {
      console.log(error);
      // Handle error, display a message, etc.

    } 
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form action='' className='bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'>
        <h1 className='text-pink-400 flex justify-center'>
          <b>Registration Form</b>
        </h1>
        <br />

        Email{' '}
        <input
          type='email'
          placeholder='Enter Email'
          onChange={(event) => {
            setUsername(event.target.value);
            setIsValidEmail(true);
          }}
        />
        
        <br />
        <br />

        Password{' '}
        <input
          type='password'
          placeholder='Enter password'
          onChange={(event) => {
            setPassword(event.target.value);
            setIsValidPassword(true);
          }}
          className='border-2 text-base'
        />
        
        <br />
        <br />

        <button
          onClick={handleRegistration}
          className='bg-pink-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
