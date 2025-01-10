import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>"Welcome to Forever – Your Ultimate Shopping Destination!
        Explore a world of quality products, amazing deals, and effortless shopping. Start your journey today!"</p>
        <p>"Discover exclusive deals and the latest trends across all categories. Shop now and experience the difference!"</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>"At Forever, our mission is to simplify shopping and bring joy to every customer. We aim to deliver quality products, unbeatable value, and exceptional convenience—all at your fingertips. By combining innovation, sustainability, and unparalleled service, we strive to create a seamless online shopping experience that enriches lives and connects people with what they love."</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, quality is at the heart of everything we do. We meticulously select our products to ensure they meet the highest standards of durability, functionality, and design.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, we prioritize your convenience. With a user-friendly platform, secure payment options, and fast delivery services, we make shopping effortless and enjoyable.

Explore a wide range of products from the comfort of your home, anytime and anywhere. Whether it’s quick reordering, easy returns, or real-time order tracking, we’re here to simplify your shopping experience.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Exceptional customer service is more than a promise—it’s our passion. Our dedicated support team is here to assist you every step of the way, ensuring a seamless shopping experience.

From answering your questions to resolving issues quickly, we are committed to going above and beyond to exceed your expectations. Whether you need help choosing the right product or tracking your order, we’re just a click or call away.

Your happiness drives us, and we’re here to make sure your journey with us is nothing short of outstanding.</p>
        </div>
        </div>
        <NewsletterBox/>
    </div>
  )
}

export default About