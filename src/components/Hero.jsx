import React from 'react'
 import {home1,home2,home3,home4,X2} from "../constant/Index"
import Header from './Header'
 
const Hero = () => {
  return (
   <>
<div className='w-[100%] h-auto'>
{/* ///////////////////////////////////////////////////////////////////////////////////// */}
<div className='container w-[100vw] h-auto  border border-red-600'>
<Header></Header>
</div>
    {/* end header */}

    {/*  👍  start hero */}



    <div className="container w-[100vw] h-auto  border border-red-600">

    <div class="grid grid-cols-2">
  <div class="col-span-1 w-6/12 border border-solid border-black"> 
  <div>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  shop now
</button>

  </div>

  </div>
  <div class="col-span-1 w-6/12 border border-dashed border-blue-500"> 
  <h2>hksjdflkdsjf Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto illo modi ipsum numquam voluptatibus laudantium voluptas perferendis debitis, et, enim ipsam odit asperiores nemo a. Minima ipsum cumque nobis qui?</h2>
  </div>
</div>




    </div>
</div>
   </>
  )
}

export default Hero
