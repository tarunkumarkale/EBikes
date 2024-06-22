import React from 'react';
import { Vi } from '../constant/Index';
import { Navigate, useNavigate } from 'react-router-dom';

const ElectricVideo = () => {
  const navigate = useNavigate();



  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white" >
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
        <h1 className="font-medium text-6xl animate-slidein opacity-0" style={{'--slidein-delay': '500ms'}}>
          Discover premium <span className="text-red-600">biking</span>
        </h1>
        <h3 className="font-normal text-2xl animate-slidein opacity-0" style={{'--slidein-delay': '800ms'}}>
          With top-quality cycles.
        </h3>
        <h5 className="font-normal text-2xl animate-slidein opacity-0" style={{'--slidein-delay': '1000ms'}}>
          Check out our new <span className="text-red-800 text-3xl font-semibold">e-bikes, bikes, and rentals</span>! See our gallery.
        </h5>
     
      </div>
    </section>
  );
};

export default ElectricVideo;
