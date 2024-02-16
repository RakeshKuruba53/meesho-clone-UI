import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  
  const navigate = useNavigate();


  const verify = async (event) => {
    event.preventDefault();

    

    // Fire Request to server using axios
    const URL = "http://localhost:8080/fp/v1/verify-Otp";
    const body = {
      email: sessionStorage.getItem("userEmail"),
      otp: otp,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const response = await axios.post(URL, body, header);
      console.log(response);

      // On successful response, redirect to the Home page
      navigate('/home');

    } catch (error) {
      console.log(error);
      // Handle errors, display a message, etc.
      setError(error);
    } 
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form action="" className='bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'>
        <h1 className=' text-pink-400 flex justify-center '>Verify OTP</h1><br/>
        
        <input 
          type='text'
          placeholder='otp' 
          onChange={(event) => setOtp(event.target.value)} 
          value={otp}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
        /><br/><br/> 

        <button 
          onClick={verify} 
         
          className={`bg-pink-400 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' }`}
        >
         submit
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
