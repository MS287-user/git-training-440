import React from 'react'
import { Link } from 'react-router-dom'

const Registerform = () => {
  return (
    <>
        <div className='w-[40%] bg-white border border-gray-300 mx-auto mt-[5%] shadow-md p-10'>
        <p className='font-bold text-2xl text-center uppercase'>Register</p>
        <form>
          <label>Full Name</label>
          <input type="text" className='w-[100%] border border-gray-300 p-1 mb-2' placeholder='Enter Your Name' />

          <label>Email Address</label>
          <input type="email" className='w-[100%] border border-gray-300 p-1 mb-2' placeholder='Enter Your Email' />

          <label>Password</label>
          <input type="password" className='w-[100%] border border-gray-300 p-1 mb-2' placeholder='Enter Your Password' />

          <p className='text-center text-sm'>Already have an Account? <Link to="/login">Login</Link></p>

          <button className='w-[100%] mt-2 border py-2 border-slate-900'>Register</button>
        </form>
      </div>
    </>
  )
}

export default Registerform