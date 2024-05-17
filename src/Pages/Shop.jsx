import React from 'react'
import ShopDesignMidSection from '../DesignSection/ShopDesignMidSection'
import ShopDesign from '../DesignSection/ShopDesign'
import Sidebar  from '../DesignSection/Sidebar'
import Header from '../components/Header'





const Shop = () => {
  return (
    <div className='bg-white'>
    
      <ShopDesign></ShopDesign>
      <ShopDesignMidSection></ShopDesignMidSection>
      <Sidebar></Sidebar>
  
    </div>
  )
}

export default Shop
