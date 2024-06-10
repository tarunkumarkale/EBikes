import React, { useState } from 'react';
import DropDown from './DropDown';

const ShopHeader = () => {
  const [user, setUser] = useState(false);

  const userClick = () => {
    setUser(prevUser => !prevUser);
  }

  return (
    <div className='flex flex-col-reverse sm:flex-row w-full h-24 mt-32 sm:mt-0 bg-white'>
      <div className='w-[100%] sm:w-[30%]'>
        <div className="wrap-input-3 ">
          <input className="input" type="text" placeholder="Search......." />
          <span className="focus-border"></span>
        </div>
      </div>
      <div className='w-full sm:w-[70%]'>
        <h1 className='text-4xl font-extrabold pt-1 pl-2'>SHOP</h1>
        <div className='flex justify-center items-end'>
          <form action="/action_page.php" className="flex items-center">
            <div className="rounded static  py-2 px-4 mr-2 z-10">
              <DropDown user={user} togg={userClick} />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
