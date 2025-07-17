import React from 'react'

const ContactSection = () => {
  return (
    <>
        <div className='contact-section py-20'>
            <p className='text-3xl text-center font-bold uppercase'>Contact Us</p>
            <form className='w-[50%] shadow-lg border border-gray-300 mx-auto p-10'>
                <input type="text" placeholder='Enter your name...' className='w-[100%] p-2 mb-4 border border-gray-300' />
                <input type="email" placeholder='Enter your email...' className='w-[100%] p-2 mb-4 border border-gray-300' />

                <textarea placeholder='Enter your message...' className='w-[100%] p-2 mb-4 border border-gray-300 resize-none'></textarea>

                <button className='w-[100%] bg-black text-white py-2 rounded-full'>React out</button>
            </form>
        </div>
    </>
  )
}

export default ContactSection