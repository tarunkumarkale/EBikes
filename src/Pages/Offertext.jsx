import React from 'react'
import NewcycleSide from './OfferSide'
import { useNavigate } from 'react-router-dom'
import "./index.css"

const NewCylce = () => {
  const Navi=useNavigate()
  return (
    <div >
      <section className="px-3 py-10 bg-neutral-100 lg:py-10 ">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center ">
            <p className="text-4xl font-bold   md:text-6xl text-orange-600 "  style={{'--slidein-delay': '500ms'}}>Heavy Discount</p>
            <p className="text-4xl font-bold md:text-7xl" style={{'--slidein-delay': '800ms'}}>SUMMER SALE</p>
            <p className="mt-2 text-sm md:text-lg"  style={{'--slidein-delay': '1000ms'}} >For limited time only!</p>
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-500 hover:scale-105 transition duration-300 ease-in-out transform"    
            onClick={()=>Navi("/Shop")}
            style={{'--slidein-delay': '1200ms'}} >Shop Now</button>

        

          </div>
          <div className="order-1 lg:order-2">
            <NewcycleSide></NewcycleSide>
            
          </div>
        </div>
      </section>/
    </div>
  )
}

export default NewCylce
