import React from 'react';
import { Award, Zap, Heart, TrendingUp, Users, Globe, Shield, Target, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence & Precision",
      description: "We maintain the highest standards in candidate evaluation, utilizing advanced technical assessments and comprehensive background verification to ensure only the most qualified professionals join our network."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation & Technology",
      description: "Leveraging cutting-edge recruitment technology, AI-powered matching algorithms, and data-driven insights to deliver superior placement outcomes and accelerated hiring timelines."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Partnership & Trust",
      description: "Building long-term relationships based on transparency, mutual success, and ethical practices. We invest in understanding both our candidates' aspirations and our clients' unique requirements."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth & Development",
      description: "Committed to fostering continuous professional growth for our candidates while helping our partner companies scale their technical teams effectively and sustainably."
    }
  ];

  const teamMembers = [
    {
      name: "Tony Lim",
      role: "Director & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1&fit=crop&crop=face",
      bio: "Former CTO with 15+ years in tech leadership. Expert in scaling remote development teams and identifying exceptional talent.",
      specialties: ["Technical Leadership", "Remote Team Building", "Strategic Hiring"]
    },
    {
      name: "Sarah Chen",
      role: "Senior Technical Recruiter",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1&fit=crop&crop=face",
      bio: "Specialized in JavaScript ecosystem recruitment with deep understanding of modern frameworks and development practices.",
      specialties: ["Frontend Development", "React/Vue Expertise", "Technical Assessment"]
    },
    {
      name: "Michael Rodriguez",
      role: "Enterprise Solutions Lead",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1&fit=crop&crop=face",
      bio: "Enterprise recruitment specialist focusing on Fortune 500 companies and high-growth startups seeking senior technical talent.",
      specialties: ["Enterprise Sales", "C-Level Placement", "Strategic Consulting"]
    }
  ];

  const achievements = [
    { metric: "1,200+", label: "Successful Placements", icon: <Users className="h-6 w-6" /> },
    { metric: "150+", label: "Partner Companies", icon: <Globe className="h-6 w-6" /> },
    { metric: "98%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { metric: "7 Days", label: "Average Placement Time", icon: <Target className="h-6 w-6" /> }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium mb-6">
                <Shield className="h-4 w-4" />
                <span>About Our Agency</span>
              </div>
              <h2 className="text-5xl font-bold text-slate-800 mb-8 leading-tight">
                Redefining Developer 
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Recruitment Excellence
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  BuiltBetter Agency represents the pinnacle of technical recruitment, specializing exclusively in JavaScript and TypeScript talent acquisition for the world's most innovative companies. Our boutique approach ensures personalized attention and exceptional outcomes for both candidates and clients.
                </p>
                <p>
                  Founded by former CTOs and senior engineering leaders, we possess deep technical expertise and industry insights that enable us to identify not just skilled developers, but transformational team members who drive organizational success.
                </p>
                <p>
                  Our proprietary vetting process, combined with an extensive network of pre-qualified senior developers, allows us to deliver exceptional placement results with industry-leading speed and precision.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-indigo-600 mb-3 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{achievement.metric}</div>
                  <div className="text-slate-600 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Choose BuiltBetter?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Exclusive Network Access</div>
                    <div className="text-slate-600">Direct connections to senior roles at unicorn startups and Fortune 500 companies</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Technical Expertise</div>
                    <div className="text-slate-600">Former CTOs and engineering leaders who understand your technical capabilities</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Accelerated Process</div>
                    <div className="text-slate-600">Fast-track interviews and streamlined hiring with average 7-day placement</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Premium Compensation</div>
                    <div className="text-slate-600">Negotiating top-tier salary packages and equity opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Our Commitment</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We believe in creating win-win scenarios where exceptional developers find fulfilling career opportunities while companies build world-class teams that drive innovation and growth.
              </p>
              <div className="flex items-center space-x-2 text-indigo-600">
                <Shield className="h-5 w-5" />
                <span className="font-medium">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Leadership Team</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with extensive recruitment experience to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-indigo-100"
                  />
                  <h4 className="text-xl font-bold text-slate-800">{member.name}</h4>
                  <p className="text-indigo-600 font-medium">{member.role}</p>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4 text-center">{member.bio}</p>
                <div className="space-y-2">
                  {member.specialties.map((specialty, specIndex) => (
                    <div key={specIndex} className="bg-slate-50 px-3 py-1 rounded-full text-sm text-slate-600 text-center">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Our Core Values</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide every interaction and decision we make in our recruitment process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-2xl flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">{value.description}</p>
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

export default About;