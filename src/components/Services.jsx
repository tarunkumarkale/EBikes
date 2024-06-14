import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Services() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []); // Run only once on component mount

  return (
    <div className='flex justify-center items-center flex-col mb-16' data-aos="zoom-in">
      <h1 className='text-5xl mb-3'>About our services</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        <ServiceCard title="E-Bike Rentals" description="Rent our electric bikes for an eco-friendly and efficient way to explore the city." delay={0} />
        <ServiceCard title="Bike Rentals" description="Experience the freedom of exploring on two wheels with our traditional bike rentals." delay={100} />
        <ServiceCard title="Bike Tours" description="Join our guided bike tours and discover hidden gems and local culture with ease." delay={200} />
        <ServiceCard title="Bike Repairs" description="Trust our experts to keep your bike in top condition with our repair and maintenance services." delay={300} />
        <ServiceCard title="Accessories" description="Enhance your biking experience with our selection of quality accessories." delay={400} />
        <ServiceCard title="Custom Builds" description="Create your dream bike with our custom build services tailored to your preferences." delay={500} />
        <ServiceCard title="Bike Maintenance" description="Keep your bike running smoothly with our comprehensive maintenance packages." delay={600} />
        <ServiceCard title="Bike Accessories" description="Explore our range of accessories to personalize your biking experience." delay={700} />
        {/* Add more ServiceCard components as needed */}
        <ServiceCard title="Bike Safety Gear" description="Stay safe on the road with our range of biking safety equipment." delay={800} />
        <ServiceCard title="Family Bike Rentals" description="Rent bikes for the whole family and enjoy a fun day out together." delay={900} />
        <ServiceCard title="Corporate Bike Programs" description="Encourage eco-friendly commuting with our corporate bike programs." delay={1000} />
        <ServiceCard title="Bike Events" description="Join our biking events and connect with fellow enthusiasts in the community." delay={1100} />
      </div>
    </div>
  );
}

function ServiceCard({ title, description, delay }) {
  return (
    <div className='flex-grow bg-gray-200 p-4' data-aos="fade-up" data-aos-delay={delay} style={{ minWidth: '250px' }}>
      <h2 className='text-lg font-bold mb-2'>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Services;
