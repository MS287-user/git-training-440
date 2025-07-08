import React from 'react'
import { Link } from 'react-router-dom'

const Loginform = () => {
  return (
    <>
        <div className='w-[40%] bg-white border border-gray-300 mx-auto mt-[5%] shadow-md p-10'>
        <p className='font-bold text-2xl text-center uppercase'>Login</p>
        <form>

          <label>Email Address</label>
          <input type="email" className='w-[100%] border border-gray-300 p-1 mb-2' placeholder='Enter Your Email' />

          <label>Password</label>
          <input type="password" className='w-[100%] border border-gray-300 p-1 mb-2' placeholder='Enter Your Password' />

          <p className='text-center text-sm'>Don't have an Account? <Link to="/register">Register</Link></p>

          <button className='w-[100%] mt-2 border py-2 border-slate-900'>Login</button>
        </form>
      </div>
    </>
  )
}

export default Loginform