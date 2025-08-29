import React from 'react';
import { Star, Quote, Award, TrendingUp, Users } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Senior Full-Stack Engineer",
      company: "TechFlow Inc.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1&fit=crop&crop=face",
      content: "BuiltBetter Agency transformed my career trajectory. Within 10 days, I was interviewing with three Fortune 500 companies and landed a role with 40% salary increase. Their technical screening process is thorough yet respectful, and Tony's guidance throughout the interview process was invaluable.",
      rating: 5,
      salary: "$165k",
      placement: "10 days",
      category: "developer"
    },
    {
      name: "Maria Santos",
      role: "Engineering Manager",
      company: "DataCore Solutions",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1&fit=crop&crop=face",
      content: "As a hiring manager, I've worked with dozens of recruitment agencies. BuiltBetter consistently delivers candidates who not only meet our technical requirements but also align perfectly with our company culture. Their vetting process is exceptional.",
      rating: 5,
      hires: "12 developers",
      timeframe: "6 months",
      category: "client"
    },
    {
      name: "David Kim",
      role: "Principal Software Architect",
      company: "Innovation Labs",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1&fit=crop&crop=face",
      content: "The level of professionalism and technical understanding at BuiltBetter is unmatched. They helped me transition from a traditional company to a cutting-edge startup, negotiating not just salary but also equity and remote work arrangements that perfectly fit my lifestyle.",
      rating: 5,
      salary: "$180k + equity",
      placement: "5 days",
      category: "developer"
    },
    {
      name: "Jennifer Walsh",
      role: "VP of Engineering",
      company: "CloudTech Dynamics",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1&fit=crop&crop=face",
      content: "BuiltBetter helped us scale our engineering team from 15 to 50 developers in just 8 months. Every single hire has been exceptional. Their understanding of our technical stack and company culture made the process seamless.",
      rating: 5,
      hires: "35 developers",
      timeframe: "8 months",
      category: "client"
    },
    {
      name: "Robert Chen",
      role: "Senior React Developer",
      company: "FinTech Solutions",
      avatar: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1&fit=crop&crop=face",
      content: "I was skeptical about recruitment agencies until I worked with BuiltBetter. They understood my technical preferences, career goals, and even helped me prepare for system design interviews. The result? My dream job at a leading fintech company.",
      rating: 5,
      salary: "$155k",
      placement: "12 days",
      category: "developer"
    },
    {
      name: "Lisa Thompson",
      role: "CTO",
      company: "StartupX",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1&fit=crop&crop=face",
      content: "As a startup CTO, finding senior developers who can hit the ground running is crucial. BuiltBetter's candidates consistently exceed expectations. Their technical assessment process ensures we only interview the best.",
      rating: 5,
      hires: "8 developers",
      timeframe: "4 months",
      category: "client"
    }
  ];

  const developerTestimonials = testimonials.filter(t => t.category === 'developer');
  const clientTestimonials = testimonials.filter(t => t.category === 'client');

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
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-indigo-100"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                      <p className="text-slate-500 text-sm">{testimonial.company}</p>
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

        {/* Client Success Stories */}
        <div>
          <div className="flex items-center justify-center space-x-3 mb-12">
            <TrendingUp className="h-6 w-6 text-purple-600" />
            <h3 className="text-3xl font-bold text-slate-800">Client Success Stories</h3>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <Quote className="absolute top-6 right-6 h-8 w-8 text-purple-200" />
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-purple-100"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      <p className="text-purple-600 font-medium">{testimonial.role}</p>
                      <p className="text-slate-500 text-sm">{testimonial.company}</p>
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
                      <div className="text-2xl font-bold text-purple-600">{testimonial.hires}</div>
                      <div className="text-sm text-slate-500">Successful Hires</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{testimonial.timeframe}</div>
                      <div className="text-sm text-slate-500">Partnership</div>
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