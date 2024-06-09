

import React, { useEffect } from 'react';
import NewcycleSide from './OfferSide';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css';

const NewCycle = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <section className="px-3 py-10 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5" data-aos="fade-up">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center" data-aos="fade-right">
            <p className="text-4xl font-bold md:text-6xl text-orange-600">
              Heavy Discount
            </p>
            <p className="text-4xl font-bold md:text-7xl">
              SUMMER SALE
            </p>
            <p className="mt-2 text-sm md:text-lg">
              For limited time only!
            </p>
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-500 hover:scale-105 transition duration-300 ease-in-out transform"
                    onClick={() => navigate("/Shop")}>
              Shop Now
            </button>
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <NewcycleSide />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewCycle;
