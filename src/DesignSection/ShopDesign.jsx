import React, { useState } from 'react';
import DropDown from './DropDown';

const ShopHeader = () => {
  const [user, setUser] = useState(false);

  const userClick = () => {
    setUser(prevUser => !prevUser);
  }

  return (
    <section className='relative'>
       <div className='flex flex-col sm:flex-row w-full mt-10 h-24  sm:my-0'>
        <div className='w-[100%] sm:w-[30%] sm:block hidden'>
           <div className="wrap-input-3">
            <input className="input" type="text" placeholder="Search......." />
            <span className="focus-border"></span>
          </div> 
        </div> 
        <div className='w-full sm:w-[70%]'>
          <div className='flex justify-center items-end'>
            <div className="rounded py-2 px-4 mr-2 z-10">
              <DropDown user={user} togg={userClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopHeader;
