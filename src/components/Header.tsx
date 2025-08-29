import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ChevronDown } from 'lucide-react';

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-2.5 rounded-xl shadow-lg">
              <Code className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>BuiltBetter</span>
              <div className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-500' : 'text-blue-100'
              }`}>Premium Recruitment</div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className={`flex items-center space-x-1 font-medium transition-colors ${
                isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
              }`}>
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="#talent-acquisition" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className="font-medium">Talent Acquisition</div>
                    <div className="text-sm text-slate-500">Premium developer recruitment</div>
                  </a>
                  <a href="#career-placement" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className="font-medium">Career Placement</div>
                    <div className="text-sm text-slate-500">Executive career opportunities</div>
                  </a>
                  <a href="#consulting" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className="font-medium">Strategic Consulting</div>
                    <div className="text-sm text-slate-500">Team building expertise</div>
                  </a>
                </div>
              </div>
            </div>
            <a href="#about" className={`font-medium transition-colors ${
              isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
            }`}>About</a>
            <a href="#success-stories" className={`font-medium transition-colors ${
              isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
            }`}>Success Stories</a>
            <a href="#contact" className={`font-medium transition-colors ${
              isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-blue-200'
            }`}>Contact</a>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </button>
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
          <div className="lg:hidden py-6 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-700 hover:text-indigo-600 font-medium py-2">Services</a>
              <a href="#about" className="text-slate-700 hover:text-indigo-600 font-medium py-2">About</a>
              <a href="#success-stories" className="text-slate-700 hover:text-indigo-600 font-medium py-2">Success Stories</a>
              <a href="#contact" className="text-slate-700 hover:text-indigo-600 font-medium py-2">Contact</a>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold w-full mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;