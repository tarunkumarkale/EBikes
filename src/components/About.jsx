import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import Header from './Header';
import Testing from '../DesignSection/Testing';

const About = () => {
  return (
    <>
 
    <div className='w-full h-auto mb-5'>
      <div className='bg-white h-auto  w-full flex flex-col justify-start items-start  pl-8 pt-5 '>
      <div className='flex flex-row'>  <button class="btn-97 ">   <FaLongArrowAltLeft/> </button> <span className='text-2xl text-gray-400 mt-2 pl-2'>Back to home</span> </div>
     


  


      </div>
      <div className='flex flex-col justify-center items-center'>
  <h1 className='text-3xl text-center scale-125'>About Our Shop</h1>
  <h4 className='text-xl text-center px-7 text-black p-3' >Welcome to our cycle shop, your go-to destination for renting bicycles, including electric models, and custom bike designs. Experience quality service and personalized rides to suit all your cycling needs.</h4>
</div>

<div>
  <Testing></Testing>
</div>





    </div>
    </>
  )
}

export default About
