import React from 'react'
import {Contact2} from '../constant/Index'
const Contacts = () => {
  return (
    <>
<div>

 
<div className="relative">
  <img src={Contact2} alt="Your Image Alt Text" className=" w-full  h-auto lg:h-screen " />
  <div className=" absolute inset-0 flex justify-center items-end mb-2 ">
    <div className=" w-[57%]   md:w-[66%] h-auto  mb-1  ">
 <div className='flex justify-center items-start flex-col md:flex-row gap-[.5%]  md:mt-10     md:items-center '>
      <h1 className='text-black font-extrabold  text-sm sm:text-2xl  uppercase transform  md:scale-y-150'><span className='text-gray-400'> Sign Up</span> <span className='text-red-400'>to our newsletter</span></h1>
      <input type="text"  className='   bg-white w-full h-auto  font-bold text-xs md:text-base px-0 text-center  text-gray-500  uppercase' placeholder='Enter Your Email Address'  />
      </div>
      <div  className='flex justify-center items-center mt-2 sm:mt-4 '>     <button class="btn-77">Sign up</button></div>
  

    </div>
    
  </div>
</div>



<div>
<footer>

</footer>
</div>




</div>
   </>
  
  )
}

export default Contacts
