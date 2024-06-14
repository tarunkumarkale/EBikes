import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from './ServiceCard';



const Services = () => {


    
const services = [
    {
      title: "Bicycle Rental",
      description: "High-quality bicycles available for daily, weekly, or monthly rental. Whether you're exploring the city or hitting the trails, we have the perfect bike for your adventure."
    },
    {
      title: "E-Bike Rental",
      description: "Experience the convenience and thrill of electric bikes with our rental services. Effortlessly cruise through the city streets or conquer challenging terrains with ease."
    },
    {
      title: "Bicycle Repair & Maintenance",
      description: "Keep your bike in top condition with our expert repair and maintenance services. From minor adjustments to major overhauls, our skilled technicians ensure your ride is smooth and safe."
    },
    {
      title: "Guided Bike Tours",
      description: "Discover the beauty of our city with our guided bike tours. Led by knowledgeable guides, explore hidden gems, iconic landmarks, and scenic routes while learning about the area's rich history and culture."
    },
    {
      title: "Cycling Events & Workshops",
      description: "Join our cycling community through our exciting events and workshops. From group rides and races to skill-building sessions and maintenance clinics, there's something for every cyclist."
    },
    {
      title: "Custom Bike Builds",
      description: "Create your dream bike with our custom bike build services. From frame selection to component customization, our experts work with you to craft a one-of-a-kind ride that suits your style and needs."
    },
    {
      title: "Bike Accessories & Gear",
      description: "Gear up for your ride with our wide selection of bike accessories and gear. From helmets and lights to racks and locks, we've got everything you need to enhance your cycling experience."
    },
    {
      title: "Corporate Bike Solutions",
      description: "Promote employee wellness and sustainability with our corporate bike solutions. From bike fleets and commuter programs to team-building activities, we help businesses create a bike-friendly workplace."
    }
  ];
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
         
          
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
