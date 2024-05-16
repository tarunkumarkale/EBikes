import React from 'react'

const ShopHeader = () => {

let option=["Bikes,E Bikes,Rent Bikes"]


  return (
    <>
    
    <div className='flex flex-col-reverse sm:flex-row   w-full  h-24 mt-32 sm:mt-0'>
<div className='w-[100%]  sm:w-[30%]'>
<div className="wrap-input-3">
  <input className="input  " type="text" placeholder="Search......." />
  <span className="focus-border "></span>
</div>
</div>
<div className='w-full sm:w-[70%] '>

  <h1 className='text-4xl font-extrabold pt-1 pl-2'>SHOP </h1>
  <div className='flex  justify-center items-end'> 
  <form action="/action_page.php" className="flex items-center">
  <input list="browsers" name="browser" className="appearance-none rounded shadow-md py-2 px-4 mr-2 border border-gray-400" placeholder="Type of bike"/>
  <datalist id="browsers">
    <option value="Bikes"/>
    <option value="E Bikes"/>
    <option value="Rent Bikes"/>
 
  </datalist>
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">Submit</button>
</form>

  
  
  </div>
</div>
    </div>
    </>
  )
}

export default ShopHeader
