
import React, { useState,useContext } from 'react';
import DropDown from './DropDown';
import CardForRegular from './CardForRegular';
import { AllDataContext } from '../context/MyContext';

const ShopHeader = () => {
  const [user, setUser] = useState(false);
  const [testing, setTesting] = useState(<CardForRegular/>);
const {SearchingProducts} = useContext(AllDataContext)
  const EmptyFun = (Msgg) => {
    setTesting(Msgg);

  };

const Search=(e)=>{
 let start=e.target.value
 SearchingProducts(start)
}


  const userClick = () => {
    setUser(prevUser => !prevUser);
  };

  return (
    <>
      <section className='relative'>
        <div className='flex flex-col sm:flex-row w-full mt-10 h-24 sm:my-0'>
          <div className='w-[100%] sm:w-[30%] sm:block hidden'>
            <div className="wrap-input-3">
              <input className="input" type="text" placeholder="Search......."   onChange={Search} />
              <span className="focus-border"></span>
            </div> 
          </div> 
          <div className='w-full sm:w-[70%]'>
            <div className='flex justify-center items-end'>
              <div className="rounded py-2 px-4 mr-2 z-10">
                <DropDown user={user} togg={userClick} handleSelectOption={EmptyFun} />
              </div>
            </div>
          </div>
        </div>
        {testing && (
          <div className="mt-4">
            {testing}
          </div>
        )}
      </section>
    </>
  );
}

export default ShopHeader;
