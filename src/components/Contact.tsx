import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Briefcase,
  Upload,
  CheckCircle,
  Star,
  Globe,
  Clock
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    availability: '',
    remoteExperience: '',
    interviewConfidence: '',
    englishAccent: '',
    message: '',
    resumeFile: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      resumeFile: file
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Get Started Today</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join our exclusive network of elite developers and gain access to premium opportunities with top-tier compensation packages.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-600 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-blue-100">tony@builtbetter.agency</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Direct Line</h4>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Global Reach</h4>
                    <p className="text-blue-100">Worldwide Remote Opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-white font-bold mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Response Times</span>
              </h4>
              <div className="space-y-3 text-blue-100">
                <div className="flex justify-between">
                  <span>Initial Response</span>
                  <span className="font-semibold">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical Review</span>
                  <span className="font-semibold">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>First Interview</span>
                  <span className="font-semibold">2-3 business days</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-white font-bold">Premium Service Guarantee</span>
              </div>
              <p className="text-green-100 text-sm">
                White-glove service with dedicated account management and personalized career guidance throughout the entire process.
              </p>
            </div>
          </div>
          
          {/* Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-800 mb-8">Developer Application Form</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Application Submitted!</h4>
                  <p className="text-slate-600">Tony will review your application and respond within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-3">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-semibold text-slate-700 mb-3">
                        Years of Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                        required
                      >
                        <option value="">Select experience level</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5-8">5-8 years</option>
                        <option value="8-12">8-12 years</option>
                        <option value="12+">12+ years</option>
                      </select>
                    </div>
                  </div>

                  {/* Salary Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="currentSalary" className="block text-sm font-semibold text-slate-700 mb-3">
                        Current Salary Range
                      </label>
                      <select
                        id="currentSalary"
                        name="currentSalary"
                        value={formData.currentSalary}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                      >
                        <option value="">Select current range</option>
                        <option value="60k-80k">$60k - $80k</option>
                        <option value="80k-100k">$80k - $100k</option>
                        <option value="100k-120k">$100k - $120k</option>
                        <option value="120k-150k">$120k - $150k</option>
                        <option value="150k+">$150k+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="expectedSalary" className="block text-sm font-semibold text-slate-700 mb-3">
                        Expected Salary Range *
                      </label>
                      <select
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                        required
                      >
                        <option value="">Select expected range</option>
                        <option value="100k-120k">$100k - $120k</option>
                        <option value="120k-150k">$120k - $150k</option>
                        <option value="150k-180k">$150k - $180k</option>
                        <option value="180k+">$180k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Remote Work Experience */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="remoteExperience" className="block text-sm font-semibold text-slate-700 mb-3">
                        Remote Work Experience *
                      </label>
                      <select
                        id="remoteExperience"
                        name="remoteExperience"
                        value={formData.remoteExperience}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                        required
                      >
                        <option value="">Select remote experience</option>
                        <option value="0">No remote experience</option>
                        <option value="1-2">1-2 companies</option>
                        <option value="3-5">3-5 companies</option>
                        <option value="5+">5+ companies</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="interviewConfidence" className="block text-sm font-semibold text-slate-700 mb-3">
                        Interview Confidence Level *
                      </label>
                      <select
                        id="interviewConfidence"
                        name="interviewConfidence"
                        value={formData.interviewConfidence}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                        required
                      >
                        <option value="">Select confidence level</option>
                        <option value="beginner">Beginner - Need significant support</option>
                        <option value="intermediate">Intermediate - Some experience</option>
                        <option value="confident">Confident - Comfortable with most interviews</option>
                        <option value="expert">Expert - Highly confident in all scenarios</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="englishAccent" className="block text-sm font-semibold text-slate-700 mb-3">
                        English Communication Style *
                      </label>
                      <select
                        id="englishAccent"
                        name="englishAccent"
                        value={formData.englishAccent}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                        required
                      >
                        <option value="">Select communication style</option>
                        <option value="native-us">Native U.S. English</option>
                        <option value="european">European English</option>
                        <option value="asian">Asian English</option>
                        <option value="indian">Indian English</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="availability" className="block text-sm font-semibold text-slate-700 mb-3">
                        Availability *
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                        required
                      >
                        <option value="">Select availability</option>
                        <option value="immediate">Available immediately</option>
                        <option value="2-weeks">2 weeks notice</option>
                        <option value="1-month">1 month notice</option>
                        <option value="flexible">Flexible timing</option>
                      </select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-slate-700 mb-3">
                      Resume/CV Upload *
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                      <div className="text-slate-600 mb-4">
                        <span className="font-medium">Click to upload</span> or drag and drop your resume
                      </div>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required
                      />
                      <label htmlFor="resume" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-indigo-700 transition-colors inline-block">
                        Choose File
                      </label>
                      {formData.resumeFile && (
                        <div className="mt-3 text-green-600 font-medium">
                          ✓ {formData.resumeFile.name}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                      Additional Information
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-lg"
                        placeholder="Tell us about your technical expertise, key projects, career goals, or any specific requirements you have for your next role..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span>Submit Application</span>
                    <Send className="h-6 w-6" />
                  </button>
                  
                  <p className="text-center text-slate-500 text-sm">
                    By submitting this form, you agree to our privacy policy and terms of service. 
                    We'll never share your information without your explicit consent.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;