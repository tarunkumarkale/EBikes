import React from 'react';
import { Vi } from '../constant/Index';

const ElectricVideo = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src={Vi}
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-medium text-6xl">Discover premium  <span className='text-red-600'>biking</span>   </h1>
        <h3 className="font-normal text-3xl">with top-quality cycles.</h3>
        <h5 className="font-normal text-3xl">Check out our new <span className='text-green-700'>e-bikes, bikes, and rentals!</span> </h5>
      </div>
    </section>
  );
};

export default ElectricVideo;
