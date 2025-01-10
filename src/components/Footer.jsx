import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-row sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm"> 
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    At Forever, we bring you a seamless shopping experience with a wide range of products to suit your every need. From trendy fashion apparel to cutting-edge electronics, home essentials, and more, we’ve got it all under one virtual roof.
                    </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-mediummg-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>+91xxxxxxx09</li>
                    <li>ram@forver.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ forver.com - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer