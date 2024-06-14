import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { home1, one, two, x1b, X2, T_Rex, green, Contact } from '../constant/Index';

const BikeGallery = () => {
  const [mainImage, setMainImage] = useState(one);
  const [mainImageEle, setMainImageEle] = useState(x1b);
  const [mainImageRent, setMainImageRent] = useState(green);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen p-5">
        <div className="md:w-2/5 flex flex-col items-center p-5" data-aos="fade-up">
          <img id="mainImage" src={mainImage} alt="Main Bike" className="w-full h-auto" />
          <div className="flex gap-4 mt-4">
            <img src={one} alt="Thumbnail 1" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(one)} />
            <img src={two} alt="Thumbnail 2" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(two)} />
            <img src={home1} alt="Thumbnail 3" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(home1)} />
          </div>
        </div>
        <div className="md:w-3/5 p-5" data-aos="fade-left">
          <h1 className="text-4xl font-bold mb-4"> Bicycles</h1>
          <p className="mb-4">
            <p>Wide Range of Casual Bikes: We offer a variety of regular bikes perfect for everyday use, including cruisers, city bikes, and classic road bikes.</p>
            <p>Comfortable and Easy to Ride: Our casual bikes are designed with comfort in mind, featuring upright seating positions, padded seats, and easy-to-use gear systems.</p>
            <p>Durable and Reliable: Built to last, our regular bikes are made from high-quality materials that ensure durability and reliability for daily commuting or leisure riding.</p>
            Choose from a selection of stylish designs and colors that suit your personal taste and make a statement on the road.
            <p>Affordable Options: We provide a range of budget-friendly bikes that offer excellent value without compromising on quality.</p>
            <p>Low Maintenance: Our regular bikes are designed to be low-maintenance, making them ideal for casual riders who want a hassle-free cycling experience.</p>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse min-h-screen p-5">
        <div className="md:w-2/5 flex flex-col items-center p-5" data-aos="fade-up">
          <img id="mainImage" src={mainImageEle} alt="Main Bike" className="w-full h-auto" />
          <div className="flex gap-4 mt-4">
            <img src={T_Rex} alt="Thumbnail 1" className="w-24 h-24 cursor-pointer" onClick={() => setMainImageEle(T_Rex)} />
            <img src={x1b} alt="Thumbnail 2" className="w-24 h-24 cursor-pointer" onClick={() => setMainImageEle(x1b)} />
            <img src={X2} alt="Thumbnail 3" className="w-24 h-24 cursor-pointer" onClick={() => setMainImageEle(X2)} />
          </div>
        </div>
        <div className="md:w-3/5 p-5" data-aos="fade-right">
          <h1 className="text-4xl font-bold mb-4">E- Bicycles</h1>
          <p className="mb-4">
            <p>Wide Range of E-Bikes: We offer a variety of e-bikes perfect for everyday use, including cruisers, city e-bikes, and classic road e-bikes.</p>
            <p>Comfortable and Easy to Ride: Our e-bikes are designed with comfort in mind, featuring upright seating positions, padded seats, and easy-to-use electric assist systems.</p>
            <p>Durable and Reliable: Built to last, our e-bikes are made from high-quality materials that ensure durability and reliability for daily commuting or leisure riding.</p>
            <p>Stylish Designs: Choose from a selection of stylish e-bike designs and colors that suit your personal taste and make a statement on the road.</p>
            <p>Affordable Options: We provide a range of budget-friendly e-bikes that offer excellent value without compromising on quality.</p>
            <p>Low Maintenance: Our e-bikes are designed to be low-maintenance, making them ideal for casual riders who want a hassle-free cycling experience.</p>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen p-5">
        <div className="md:w-2/5 flex flex-col items-center p-5" data-aos="fade-up">
          <img id="mainImage" src={mainImageRent} alt="Main Bike" className="w-full h-auto" />
          <div className="flex gap-4 mt-4">
            <img src={T_Rex} alt="Thumbnail 1" className="w-24 h-24 cursor-pointer" onClick={() => setMainImageRent(T_Rex)} />
            <img src={Contact} alt="Thumbnail 2" className="w-24 h-24 cursor-pointer" onClick={() => setMainImageRent(Contact)} />
            <img src={x1b} alt="Thumbnail 3" className="w-24 h-24 cursor-pointer" onClick={() => setMainImageRent(x1b)} />
          </div>
        </div>
        <div className="md:w-3/5 p-5" data-aos="fade-left">
          <h1 className="text-4xl font-bold mb-4">Rental Bicycles</h1>
          <p className="mb-4">
            <p>Wide Range of Rental Bikes: We offer a variety of rental bikes perfect for your temporary needs, including both electric bikes and regular bikes such as cruisers, city bikes, and classic road bikes.</p>
            <p>Comfortable and Easy to Ride: Our rental bikes are designed with comfort in mind, featuring upright seating positions, padded seats, and easy-to-use gear systems. Whether you choose an electric bike or a regular bike, you'll enjoy a smooth and comfortable ride.</p>
            <p>Durable and Reliable: Built to last, our rental bikes are made from high-quality materials that ensure durability and reliability for daily commuting or leisure riding. Both our electric and regular bikes are maintained to the highest standards.</p>
            <p>Stylish Designs: Choose from a selection of stylish rental bike designs and colors that suit your personal taste and make a statement on the road, whether you prefer an electric or a regular bike.</p>
            <p>Affordable Options: We provide a range of budget-friendly rental bikes, both electric and regular, that offer excellent value without compromising on quality.</p>
            <p>Low Maintenance: Our rental bikes, whether electric or regular, are designed to be low-maintenance, making them ideal for casual riders who want a hassle-free cycling experience.</p>
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col mb-16' data-aos="zoom-in">
        <h1 className='text-5xl mb-3'>About our services</h1>
        <div className='flex flex-row'>
          <div className='flex flex-row gap-2'>
            <div className='flex-grow bg-gray-200 p-4' data-aos="fade-up">
              <h2 className='text-lg font-bold mb-2'>24/7 Support</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex-grow bg-gray-200 p-4' data-aos="fade-up" data-aos-delay="100">
              <h2 className='text-lg font-bold mb-2'>Fast Deliveries</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='flex-grow bg-gray-200 p-4' data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-lg font-bold mb-2'>Many Offers</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeGallery;
