import React from 'react';
import { ArrowRight, Star, Users, Globe, TrendingUp, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">Premium Recruitment Excellence</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Elite Developer
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent block">
                Recruitment
              </span>
              <span className="text-4xl lg:text-5xl text-blue-200">Agency</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              We connect exceptional JavaScript and TypeScript developers with premium remote opportunities at leading technology companies. Maximize your earning potential with our exclusive placement network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center space-x-3">
                <span>Explore Opportunities</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                Partner With Us
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white">1,200+</div>
                <div className="text-blue-200 text-sm">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-blue-200 text-sm">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-teal-400" />
                </div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8 relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1&fit=crop&crop=face"
                        alt="Tony Lim"
                        className="w-16 h-16 rounded-full object-cover border-4 border-indigo-100"
                      />
                      <div>
                        <div className="font-bold text-slate-800 text-lg">Tony Lim</div>
                        <div className="text-indigo-600 font-medium">Director</div>
                        <div className="text-slate-500 text-sm">BuiltBetter Agency</div>
                      </div>
                    </div>
                    <Shield className="h-8 w-8 text-green-500" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                    <div className="text-sm text-slate-600 mb-2">Current Opportunity</div>
                    <div className="font-bold text-slate-800">Senior Full-Stack Developer</div>
                    <div className="text-indigo-600 font-medium">JavaScript/TypeScript Focus</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Salary Range</span>
                      <span className="font-bold text-green-600">$120k - $180k</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Remote</span>
                      <span className="font-bold text-blue-600">100% Global</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Experience</span>
                      <span className="font-bold text-purple-600">5+ Years</span>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">$150k+</div>
                  <div className="text-xs">Avg Salary</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-4 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">7 Days</div>
                  <div className="text-xs">Avg Placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;