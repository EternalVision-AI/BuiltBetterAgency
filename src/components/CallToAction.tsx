import React from 'react';
import { ArrowRight, Briefcase, UserPlus, Star, TrendingUp, Award, Globe } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Take Action Today</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Join our exclusive network of elite developers and companies. Whether you're seeking your next career opportunity 
            or looking to build your dream team, we're here to make it happen.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* For Developers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <UserPlus className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">For Elite Developers</h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Access exclusive opportunities with Fortune 500 companies and unicorn startups. 
                Maximize your earning potential with our premium placement network.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                  <span className="text-white font-medium">Average Salary Increase</span>
                  <span className="text-green-300 font-bold text-xl">+40%</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                  <span className="text-white font-medium">Placement Success Rate</span>
                  <span className="text-yellow-300 font-bold text-xl">98%</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                  <span className="text-white font-medium">Average Time to Offer</span>
                  <span className="text-blue-300 font-bold text-xl">7 Days</span>
                </div>
              </div>
              
              <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 mx-auto group">
                <span>Explore Opportunities</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-6 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
                <span className="text-white/80 ml-2 text-sm">4.9/5 Developer Rating</span>
              </div>
            </div>
          </div>
          
          {/* For Companies */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">For Growing Companies</h3>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Build world-class remote development teams with our pre-vetted senior developers. 
                Scale faster with confidence and reduce hiring risks.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                  <span className="text-white font-medium">Quality Guarantee</span>
                  <span className="text-green-300 font-bold text-xl">100%</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                  <span className="text-white font-medium">Time to Hire</span>
                  <span className="text-yellow-300 font-bold text-xl">7 Days</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-4">
                  <span className="text-white font-medium">Client Retention</span>
                  <span className="text-blue-300 font-bold text-xl">95%</span>
                </div>
              </div>
              
              <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 mx-auto group">
                <span>Hire Elite Talent</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-6 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
                <span className="text-white/80 ml-2 text-sm">4.8/5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">1,200+</div>
              <div className="text-blue-100">Successful Placements</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-white mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;