import React from 'react'

const VerifyOtp = () => {
  return (
   <div className='flex items-center justify-center h-screen gap-32'>
        <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 flex justify-center items-center flex-col">
    <h1 className='text-pink-400 flex justify-center'><b>Verify Otp</b></h1><br />
    

   <input type="text" placeholder='#     #     #     #     #     #' 
className='border-2 text-base '/><br/><br />
<button className="bg-pink-400  hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
>Submit</button>
    </form>
   </div>
  )
}

export default VerifyOtp