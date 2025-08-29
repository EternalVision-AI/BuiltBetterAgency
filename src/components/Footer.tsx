import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe, Award, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-3 rounded-xl shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">BuiltBetter</span>
                <div className="text-indigo-300 text-sm font-medium">Premium Recruitment Agency</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-lg mb-8 text-lg">
              Connecting exceptional JavaScript and TypeScript developers with premium remote opportunities 
              at leading technology companies worldwide. Your trusted partner in career advancement and team building.
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
            
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-purple-600 transition-all duration-300 transform hover:-translate-y-1">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Elite Developer Recruitment</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Executive Career Placement</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Technical Team Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Remote Team Building</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Salary Negotiation Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Interview Preparation</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>tony@builtbetter.agency</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>Global Remote Operations</span>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800 rounded-xl p-6">
              <h5 className="text-white font-bold mb-3">Business Hours</h5>
              <div className="space-y-2 text-slate-400 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM EST</span>
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
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-6 lg:mb-0">
              © 2025 BuiltBetter Agency. All rights reserved. | 
              <span className="text-indigo-300 ml-1">Premium Recruitment Excellence</span>
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