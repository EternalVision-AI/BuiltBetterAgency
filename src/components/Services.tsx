import React from 'react';
import { Shield, Users, DollarSign, Clock, Star, Briefcase } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Recruitment",
      description: "We connect you with premium remote opportunities at top-tier companies seeking senior software developers.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Complete Support",
      description: "From application to onboarding, we handle all documentation, verification, and legal processes on your behalf.",
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Income Optimization",
      description: "Strategic positioning to help experienced developers maximize their earning potential through multiple opportunities.",
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Flexible Arrangements",
      description: "Time management solutions designed for developers who want to efficiently balance multiple professional commitments.",
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Premium Positions",
      description: "Access to exclusive senior-level roles with competitive compensation packages and growth opportunities.",
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Career Advancement",
      description: "Professional development support to enhance your interview skills and technical presentation abilities.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions to help senior developers unlock new income streams while maintaining professional excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;