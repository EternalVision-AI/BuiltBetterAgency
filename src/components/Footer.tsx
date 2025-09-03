import React from 'react';
import { Code, Mail, Phone, MapPin, Globe, Award, Shield, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                  src="/images/logo/main.png"
                  alt="Tony Lim"
                  className="w-14 h-14"
              />
              <div>
                <span className="text-2xl font-bold">BuiltBetter</span>
                <div className="text-indigo-300 text-sm font-medium">Unlock Your True Earning Potential</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-lg mb-8 text-lg">
              Connecting exceptional senior developers with premium remote opportunities at leading technology companies worldwide. Your trusted partner in career advancement and team building.
            </p>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-slate-300">Industry Leading</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm text-slate-300">Verified & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-slate-300">Global Network</span>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800 rounded-xl p-6 ">
              <h5 className="text-white font-bold mb-3">Business Hours</h5>
              <div className="space-y-2 text-slate-400 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekend</span>
                  <span>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency</span>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Expert Recruitment</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Complete Support</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Income Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Flexible Arrangements</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Premium Positions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Career Advancement</a></li>
            </ul>
          </div>
        
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>tony.builtbetter@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Send className="h-5 w-5 text-purple-400" />
                <span>@builtbetter_tony</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>Cyberport 3, Pok Fu Lam, Hong Kong</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors" />
            </div>
            
            

            {/* Interactive Google Map */}
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                <div className="relative group">
                  {/* Interactive Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button 
                      onClick={() => window.open('https://www.google.com/maps/place/Cyberport+3,+100+Cyberport+Road,+Pok+Fu+Lam,+Hong+Kong', '_blank')}
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
                      title="Open in Google Maps"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </button>
                    
                    <button 
                      onClick={() => window.open('https://www.google.com/maps/dir//Cyberport+3,+100+Cyberport+Road,+Pok+Fu+Lam,+Hong+Kong', '_blank')}
                      className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
                      title="Get Directions"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                      </svg>
                    </button>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6767!2d114.1694!3d22.3193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c2dcb75dcf%3A0xf077ac10a4c2bcaf!2sCyberport%203%2C%20100%20Cyberport%20Road%2C%20Pok%20Fu%20Lam%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BuiltBetter Agency Location - Cyberport 3, Hong Kong"
                    className="w-full h-64"
                  ></iframe>
                  
                  
                </div>

              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-6 lg:mb-0">
              © 2025 BuiltBetter Agency. All rights reserved. 
              <span className="text-indigo-300 ml-1">Hong Kong SAR</span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Compliance</a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-full">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-slate-300 text-sm">SOC 2 Compliant | GDPR Ready | ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;