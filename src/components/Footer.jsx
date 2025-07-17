import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-20 bg-blue-900 text-white p-14'>
            <div className='categories'>
                <p className='footer-heading uppercase text-2xl font-bold mb-4'>Categories</p>
                <p>Women</p>
                <p>Men</p>
                <p>Shoes</p>
                <p>Watches</p>
            </div>
            <div className='help'>
              <p className='footer-heading uppercase text-2xl font-bold mb-4'>Help</p>
              <p>Track Order</p>
              <p>Returns</p>
              <p>Shipping</p>
              <p>FAQs</p>
            </div>
            <div className='GETINTOUCH'>
              <p className='footer-heading uppercase text-2xl font-bold mb-4'>GET IN TOUCH</p>
              <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
              <p className='flex space-x-3 mt-3 items-center'>
                <Facebook/>
                <Instagram />
                <i className="ri-pinterest-line text-2xl"></i>
              </p>
            </div>
            <div>
              <p className='footer-heading uppercase text-2xl font-bold mb-4'>Newsletter</p>

              <form>
                <input type="text" className='w-[100%] border-0 border-b-2 border-gray-300 focus:outline-0 focus:border-purple-400' />
                <button className='w-[80%] text-center mt-3 bg-white text-black py-2 rounded-full'>Subscribe</button>
              </form>
            </div>
        </footer>
    </>
  )
}

export default Footer