import React from 'react'
import './Section3.css'
import Servicecard from './Servicecard'

const Section3 = () => {

  const services = [
    { icon: "", title: "Service One", description: "Description for service one." },
    { icon: "", title: "Service Two", description: "Description for service two." },
    { icon: "", title: "Service Three", description: "Description for service three." },
    { icon: "", title: "Service Four", description: "Description for service four." },
    { icon: "", title: "Service Five", description: "Description for service five." },
    { icon: "", title: "Service Six", description: "Description for service six." },
    { icon: "", title: "Service Seven", description: "Description for service seven." },
    { icon: "", title: "Service Eight", description: "Description for service eight." },
  ];

  return (
    <div className="mt-20 mb-10 px-6">

      <div id="servicestitle" className="text-4xl font-bold text-blue-900 text-center mb-12">
        Our Services
      </div>

      {/* Grid layout */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2
        lg:grid-cols-4
        gap-x-10
        gap-y-12
        justify-items-center
        
        place-items-center
      ">
        {services.map((srv, index) => (
          <Servicecard 
            key={index}
            icon={srv.icon}
            title={srv.title}
            description={srv.description}
          />
        ))}
      </div>

    </div>
  )
}

export default Section3
