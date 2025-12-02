import React from 'react';
import { Star, Quote, Award, Users, Linkedin } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Eric Lam",
      role: "Senior Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/eric-fullstack-javascript",
      avatar: "https://media.licdn.com/dms/image/v2/D4E35AQEGrDGa8Kdqmg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1732529652489?e=1757368800&v=beta&t=sFG7JgGCxo-11jOLnYWh-V222GtI69LDJiITC1E2lDE",
      content: "BuiltBetter Agency transformed my career trajectory. Within 25 days, I was interviewing with eight Fortune 500 companies and landed a role with 40% salary increase. Their technical screening process is thorough yet respectful, and Tony's guidance throughout the interview process was invaluable.",
      rating: 5,
      salary: "$65k",
      placement: "25 days",
      category: "developer"
    },
    {
      name: "Juana Zabaleta",
      role: "Senior DevOps Engineer",
      linkedin: "https://www.linkedin.com/in/juanazabaleta",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQH2M4o8Zj0IXw/profile-displayphoto-scale_200_200/B4DZetyINrHMAY-/0/1750967289372?e=1759363200&v=beta&t=sBhXaL8zjFx1BGNZwCppkOHtveCoMTkN5Jm9PpjcyiQ",
      content: "I was skeptical about recruitment agencies until I worked with BuiltBetter. They understood my technical preferences, career goals, and even helped me prepare for system design interviews. The result? My dream job at a leading fintech company.",
      rating: 5,
      salary: "$60k",
      placement: "22 days",
      category: "developer"
    },
    {
      name: "Manuel Roqueme",
      role: "Senior Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/manuel-fullstack-javascript/",
      avatar: "https://media.licdn.com/dms/image/v2/D4D35AQEadF_LW2yIpw/profile-framedphoto-shrink_400_400/B4DZg95GOsHsAg-/0/1753385035099?e=1757368800&v=beta&t=x1OdGyqJngEQKh4BGSlDr7u5p33x2UkDCBF8S5cZHYY",
      content: "The level of professionalism and technical understanding at BuiltBetter is unmatched. They helped me transition from a traditional company to a cutting-edge startup, negotiating not just salary but also equity and remote work arrangements that perfectly fit my lifestyle.",
      rating: 5,
      salary: "$50k + equity",
      placement: "27 days",
      category: "developer"
    },
  ];

  const developerTestimonials = testimonials.filter(t => t.category === 'developer');

  return (
    <section id="success-stories" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">What Our Community Says</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Hear from developers who've advanced their careers and companies who've built exceptional teams through our platform.
          </p>
        </div>

        {/* Developer Success Stories */}
        <div className="mb-20">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Users className="h-6 w-6 text-indigo-600" />
            <h3 className="text-3xl font-bold text-slate-800">Developer Success Stories</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {developerTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <Quote className="absolute top-6 right-6 h-8 w-8 text-indigo-200" />
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-28 h-28 rounded-full object-cover mr-4 border-4 border-indigo-100"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                      {/* <a 
                        href={testimonial.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-500 text-sm hover:text-indigo-600 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 mr-1" />
                        View LinkedIn Profile
                      </a> */}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">"{testimonial.content}"</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{testimonial.salary}</div>
                      <div className="text-sm text-slate-500">New Salary</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{testimonial.placement}</div>
                      <div className="text-sm text-slate-500">Placement Time</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;