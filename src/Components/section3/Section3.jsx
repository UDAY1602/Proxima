import React from 'react'
import './Section3.css'
import Servicecard from './Servicecard'

const Section3 = () => {

  const services =[
  {
    icon: "https://img.icons8.com/fluency/96/money-bag.png",
    title: "Wealth Management",
    description: "Personalized investment planning to grow and protect your wealth."
  },
  {
    icon: "https://img.icons8.com/fluency/96/combo-chart.png",
    title: "Portfolio Analysis",
    description: "Track, review, and optimize your investment portfolio performance."
  },
  {
    icon: "https://www.investopedia.com/thmb/PiX1N_NjIoofmApM8odHfBw1OZw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/credit_definition_0927-c6b92227eef541558c471de0504e820a.jpg",
    title: "Credit Advisory",
    description: "Improve credit scores and get tailored advice for better financial health."
  },
  {
    icon: "https://img.icons8.com/fluency/96/bank.png",
    title: "Banking Solutions",
    description: "Secure banking services including payments, transfers, and savings plans."
  },
  {
    icon: "https://img.icons8.com/fluency/96/financial-growth-analysis.png",
    title: "Market Insights",
    description: "Real-time financial market updates and analytical insights."
  },
  {
    icon: "https://img.icons8.com/fluency/96/tax.png",
    title: "Tax Planning",
    description: "Smart tax-saving strategies and compliance assistance."
  },
  {
    icon: "https://img.icons8.com/fluency/96/cryptocurrency.png",
    title: "Crypto Advisory",
    description: "Expert guidance on safe crypto investments and blockchain assets."
  },
  {
    icon: "https://img.icons8.com/fluency/96/privacy.png",
    title: "Financial Security",
    description: "Risk assessments and fraud protection for secure financial operations."
  }
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
