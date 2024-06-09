import React, { useState } from 'react';
import { home1, one, two } from '../constant/Index';


const BikeGallery = () => {
  const [mainImage, setMainImage] = useState(one);

  return (
    <>
    <div className="flex flex-col md:flex-row min-h-screen p-5">
      <div className="md:w-2/5 flex flex-col items-center p-5">
        <img id="mainImage" src={mainImage} alt="Main Bike" className="w-full h-auto" />
        <div className="flex gap-4 mt-4">
          <img src={one} alt="Thumbnail 1" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(one)} />
          <img src={two} alt="Thumbnail 2" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(two)} />
          <img src={home1} alt="Thumbnail 3" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(home1)} />
        </div>
      </div>
      <div className="md:w-3/5 p-5">
        <h1 className="text-4xl font-bold mb-4">High-Performance Bicycles</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
    </div>




<div className="flex flex-col md:flex-row-reverse min-h-screen p-5">
      <div className="md:w-2/5 flex flex-col items-center p-5">
        <img id="mainImage" src={mainImage} alt="Main Bike" className="w-full h-auto" />
        <div className="flex gap-4 mt-4">
          <img src={one} alt="Thumbnail 1" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(one)} />
          <img src={two} alt="Thumbnail 2" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(two)} />
          <img src={home1} alt="Thumbnail 3" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(home1)} />
        </div>
      </div>
      <div className="md:w-3/5 p-5">
        <h1 className="text-4xl font-bold mb-4">High-Performance Bicycles</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
    </div>




<div className="flex flex-col md:flex-row min-h-screen p-5">
      <div className="md:w-2/5 flex flex-col items-center p-5">
        <img id="mainImage" src={mainImage} alt="Main Bike" className="w-full h-auto" />
        <div className="flex gap-4 mt-4">
          <img src={one} alt="Thumbnail 1" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(one)} />
          <img src={two} alt="Thumbnail 2" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(two)} />
          <img src={home1} alt="Thumbnail 3" className="w-24 h-24 cursor-pointer" onClick={() => setMainImage(home1)} />
        </div>
      </div>
      <div className="md:w-3/5 p-5">
        <h1 className="text-4xl font-bold mb-4">High-Performance Bicycles</h1>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
    </div>


<div className='flex justify-center items-center  flex-col mb-16'> 
  <h1 className='text-5xl mb-3'> About our services</h1>
  
  <div className='flex flex-row'>
  <div className='flex flex-row gap-2'>
  <div className='flex-grow bg-gray-200 p-4'>
    <h2 className='text-lg font-bold mb-2'>24/7 Support</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
  <div className='flex-grow bg-gray-200 p-4'>
    <h2 className='text-lg font-bold mb-2'>Fast Deliveries</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  <div className='flex-grow bg-gray-200 p-4'>
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
