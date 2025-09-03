import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group">
            <div className="p-2.5 transform group-hover:scale-110 transition-transform duration-300">
              <img 
                src="/images/logo/main.png"
                alt="Tony Lim"
                className="w-20 drop-shadow-lg"
              />
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform duration-300">
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>BuiltBetter</span>
              <div className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-500' : 'text-blue-100'
              }`}>Exceptional developers deserve exceptional opportunities
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute -top-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out delay-100"></span>
              </span>
            </a>
            <a 
              href="#services" 
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <span className="relative">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute -top-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out delay-100"></span>
              </span>
            </a>
            <a 
              href="#success-stories" 
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <span className="relative">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute -top-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out delay-100"></span>
              </span>
            </a>
            <a 
              href="#about" 
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute -top-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out delay-100"></span>
              </span>
            </a>
            <a 
              href="#faq" 
              className={`font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <span className="relative">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute -top-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 ease-out delay-100"></span>
              </span>
            </a>
            <a 
              href="#apply" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 delay-150"></div>
            </a>
          </nav>

          <button 
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white/95 backdrop-blur-xl border-t border-indigo-100 shadow-2xl mx-auto px-6 py-6 animate-in slide-in-from-top-2 duration-500 ease-out">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-slate-700 hover:text-indigo-600 font-medium py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 flex items-center group transform hover:translate-x-2"
              >
                <span className="group-hover:font-semibold transition-all duration-300">Home</span>
              </a>
              <a 
                href="#services" 
                className="text-slate-700 hover:text-indigo-600 font-medium py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 flex items-center group transform hover:translate-x-2"
              >
                <span className="group-hover:font-semibold transition-all duration-300">Services</span>
              </a>
              <a 
                href="#success-stories" 
                className="text-slate-700 hover:text-indigo-600 font-medium py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 flex items-center group transform hover:translate-x-2"
              >
                <span className="group-hover:font-semibold transition-all duration-300">Success Stories</span>
              </a>
              <a 
                href="#about" 
                className="text-slate-700 hover:text-indigo-600 font-medium py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 flex items-center group transform hover:translate-x-2"
              >
                <span className="group-hover:font-semibold transition-all duration-300">About</span>
              </a>
              <a 
                href="#faq" 
                className="text-slate-700 hover:text-indigo-600 font-medium py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 flex items-center group transform hover:translate-x-2"
              >
                <span className="group-hover:font-semibold transition-all duration-300">FAQ</span>
              </a>
              <a 
                href="#apply" 
                className="text-slate-700 hover:text-indigo-600 font-medium py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 flex items-center group transform hover:translate-x-2"
              >
                <span className="group-hover:font-semibold transition-all duration-300">Contact Us</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;