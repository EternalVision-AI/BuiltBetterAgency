import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle,
  Star,
  Video
} from 'lucide-react';
import { sendEmail } from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    loom: '',
    telegram: '',
    companies: '',
    interviewConfidence: '',
    englishAccent: '',
    availability: '',
    resumeLink: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields including resume
    // if (!formData.resumeFile) {
    //   alert('Please upload your resume before submitting.');
    //   return;
    // }
    
    try {
      // Get user's location
      let location = 'Not detected';
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_name && data.city) {
          location = `${data.country_name}, ${data.city}`;
        } else if (data.country_name) {
          location = data.country_name;
        }
      } catch (locationError) {
        console.log('Location detection failed:', locationError);
      }

      const result = await sendEmail({
        ...formData,
        location
      });
      
      if (result.success) {
        console.log('Email sent successfully');
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        // Reset form after successful submission
        setFormData({
          email: '',
          loom: '',
          telegram: '',
          companies: '',
          interviewConfidence: '',
          englishAccent: '',
          availability: '',
          resumeLink: ''
        });
      } else {
        console.error('Failed to send email:', result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending application. Please try again or contact us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] || null;
  //   setFormData({
  //     ...formData,
  //     resumeFile: file
  //   });
  // };

  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6">
            <Star className="h-4 w-4" />
            <span>Apply Today</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Unlock Your Earning Potential?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Complete our comprehensive application form and take the first step toward maximizing your income as a senior developer with premium opportunities.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Contact Information */}
          {/* <div className="space-y-8">
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

            <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="h-6 w-6 text-blue-400" />
                <span className="text-white font-bold">Success Metrics</span>
              </div>
              <div className="space-y-2 text-blue-100 text-sm">
                <div className="flex justify-between">
                  <span>Average Income Increase</span>
                  <span className="font-semibold">167%</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span className="font-semibold">98%</span>
                </div>
                <div className="flex justify-between">
                  <span>Time to First Placement</span>
                  <span className="font-semibold">2-4 weeks</span>
                </div>
              </div>
            </div>
          </div> */}
          
          {/* Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-800 mb-8">Senior Developer Application</h3>
              
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
                          placeholder="tony.builtbetter@gmail.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="telegram" className="block text-sm font-semibold text-slate-700 mb-3">
                        Telegram ID
                      </label>
                      <div className="relative">
                        <Send className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="telegram"
                          name="telegram"
                          value={formData.telegram}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                          placeholder="@builtbetter"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="loom" className="block text-sm font-semibold text-slate-700 mb-3">
                        Loom Video Link *
                      </label>
                      <div className="relative">
                        <Video className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="loom"
                          name="loom"
                          value={formData.loom}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                          placeholder="https://www.loom.com/share/[ID]"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="loom" className="block text-sm font-semibold text-slate-700 mb-3">
                        Resume/CV Share Link *
                      </label>
                      <div className="relative">
                        <Video className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          id="resumeLink"
                          name="resumeLink"
                          value={formData.resumeLink}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                          placeholder="https://www.loom.com/share/[ID]"
                          required
                        />
                      </div>
                    </div>
                  </div>


                  {/* Communication & Confidence */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companies" className="block text-sm font-semibold text-slate-700 mb-3">
                        Remote Companies Worked With *
                      </label>
                      <select
                        id="companies"
                        name="companies"
                        value={formData.companies}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-lg"
                        required
                      >
                        <option value="">Select number of companies</option>
                        <option value="1-2">1-2 companies</option>
                        <option value="3-5">3-5 companies</option>
                        <option value="6-10">6-10 companies</option>
                        <option value="10+">10+ companies</option>
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
                        <option value="very-confident">Very Confident - I excel in all interview stages</option>
                        <option value="confident">Confident - I handle most interview situations well</option>
                        <option value="somewhat">Somewhat Confident - I need some preparation</option>
                        <option value="need-help">I could use guidance and practice</option>
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
                  {/* <div>
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
                      />
                      <label htmlFor="resume" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium cursor-pointer hover:bg-indigo-700 transition-colors inline-block">
                        Choose File
                      </label>
                      {formData.resumeFile && (
                        <div className="mt-3 text-green-600 font-medium">
                          ✓ {formData.resumeFile.name}
                        </div>
                      )}
                      {!formData.resumeFile && (
                        <div className="mt-3 text-red-500 text-sm">
                          Resume is required
                        </div>
                      )}
                    </div>
                  </div> */}
                  
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