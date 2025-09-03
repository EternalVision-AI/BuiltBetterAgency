import React from 'react';
import { ArrowRight, FileText, MessageSquare, ShieldCheck, Briefcase } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12" />,
      title: "Submit Application",
      description: "Share your resume, intro video, and tell us about your remote work experience and technical expertise.",
      step: "01"
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Initial Assessment",
      description: "We evaluate your interview confidence, technical skills, and communication abilities to ensure perfect matches.",
      step: "02"
    },
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      title: "Profile Setup",
      description: "We create professional profiles and handle all verification processes while you focus on technical preparations.",
      step: "03"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Get Placed",
      description: "Start working with premium companies while we continue to support you throughout your engagement.",
      step: "04"
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures you get matched with the right opportunities while we handle the complexities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <div className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {step.title}
                  </h3>
                </div>
                <div>
                  <p className="text-white/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-blue-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
