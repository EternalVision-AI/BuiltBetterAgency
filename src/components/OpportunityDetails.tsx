import React, { useState } from 'react';
import { 
  Code, 
  DollarSign, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Briefcase,
  Globe,
  Award,
  Target
} from 'lucide-react';

const OpportunityDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const requirements = [
    "5+ years of professional JavaScript/TypeScript development experience",
    "Expert-level proficiency in React, Node.js, and modern frameworks",
    "Strong experience with cloud platforms (AWS, Azure, or GCP)",
    "Proven track record in remote team collaboration and communication",
    "Experience with microservices architecture and API design",
    "Familiarity with DevOps practices and CI/CD pipelines",
    "Strong problem-solving skills and system design capabilities",
    "Excellent English communication skills for global team collaboration"
  ];

  const benefits = [
    "Competitive salary range: $120k - $180k annually",
    "100% remote work with flexible time zones",
    "Comprehensive health, dental, and vision insurance",
    "Annual learning and development budget ($5,000)",
    "Top-tier equipment and home office setup allowance",
    "Equity participation in high-growth companies",
    "Paid time off and sabbatical opportunities",
    "Access to exclusive industry conferences and events"
  ];

  const techStack = [
    { name: "JavaScript/TypeScript", level: "Expert", color: "bg-yellow-100 text-yellow-800" },
    { name: "React/Next.js", level: "Advanced", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js/Express", level: "Expert", color: "bg-green-100 text-green-800" },
    { name: "PostgreSQL/MongoDB", level: "Proficient", color: "bg-purple-100 text-purple-800" },
    { name: "AWS/Docker", level: "Intermediate", color: "bg-orange-100 text-orange-800" },
    { name: "GraphQL/REST APIs", level: "Advanced", color: "bg-pink-100 text-pink-800" }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit your resume and complete our technical profile assessment",
      duration: "15 minutes",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Technical Screening",
      description: "Comprehensive technical interview covering algorithms, system design, and practical coding",
      duration: "90 minutes",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Client Matching",
      description: "We match your profile with our exclusive network of premium companies",
      duration: "2-3 days",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Interview Coordination",
      description: "We facilitate and support you through the client interview process",
      duration: "1-2 weeks",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>Featured Opportunity</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6">Senior Full-Stack Developer</h2>
            <p className="text-2xl text-slate-600 mb-8">JavaScript/TypeScript Specialization</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-700">$120k - $180k</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-700">100% Remote</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-purple-700">Full-Time</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1 rounded-xl">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'requirements', label: 'Requirements' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'process', label: 'Application Process' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-indigo-600 shadow-md'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {activeTab === 'overview' && (
              <div className="p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-6">Opportunity Overview</h3>
                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                      <p>
                        We're seeking exceptional Senior Full-Stack Developers to join our exclusive network of premium placements. This opportunity represents access to multiple high-caliber positions with leading technology companies.
                      </p>
                      <p>
                        Our clients include Fortune 500 companies, unicorn startups, and innovative scale-ups seeking senior technical talent for critical projects and leadership roles.
                      </p>
                      <p>
                        As part of our network, you'll have access to opportunities that aren't publicly advertised, with compensation packages that reflect the premium nature of these positions.
                      </p>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                      <h4 className="font-bold text-slate-800 mb-3">What Makes This Different?</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-slate-600">Exclusive access to hidden job market</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-slate-600">Direct communication with hiring managers</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-slate-600">Comprehensive interview preparation and support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-6">Technical Stack</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {techStack.map((tech, index) => (
                        <div key={index} className="bg-slate-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                          <div className="font-semibold text-slate-800 mb-1">{tech.name}</div>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}>
                            {tech.level}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center space-x-2">
                        <Award className="h-5 w-5 text-green-600" />
                        <span>Premium Placement Guarantee</span>
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        We guarantee placement within 30 days or we continue working with you at no additional cost. 
                        Our success rate speaks for itself - 98% of our candidates receive offers within the first two weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="p-12">
                <h3 className="text-3xl font-bold text-slate-800 mb-8">Technical Requirements</h3>
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-6">Essential Qualifications</h4>
                    <div className="space-y-4">
                      {requirements.map((req, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                          <CheckCircle className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-6">Preferred Experience</h4>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                        <h5 className="font-semibold text-slate-800 mb-3">Remote Work Excellence</h5>
                        <p className="text-slate-600 leading-relaxed">
                          Demonstrated success in remote work environments with strong self-management skills, 
                          excellent communication abilities, and experience collaborating across time zones.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                        <h5 className="font-semibold text-slate-800 mb-3">Leadership & Mentoring</h5>
                        <p className="text-slate-600 leading-relaxed">
                          Experience mentoring junior developers, leading technical initiatives, and contributing 
                          to architectural decisions in fast-paced, high-growth environments.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                        <h5 className="font-semibold text-slate-800 mb-3">Industry Impact</h5>
                        <p className="text-slate-600 leading-relaxed">
                          Track record of delivering high-impact projects, contributing to open-source initiatives, 
                          or building products that have reached significant scale and user adoption.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="p-12">
                <h3 className="text-3xl font-bold text-slate-800 mb-8">Comprehensive Benefits Package</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-slate-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold mb-4">Additional Perks</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Globe className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                        <div className="font-semibold">Global Opportunities</div>
                        <div className="text-sm text-blue-100">Work with international teams</div>
                      </div>
                      <div className="text-center">
                        <Award className="h-8 w-8 mx-auto mb-2 text-yellow-200" />
                        <div className="font-semibold">Career Growth</div>
                        <div className="text-sm text-blue-100">Fast-track to leadership roles</div>
                      </div>
                      <div className="text-center">
                        <Users className="h-8 w-8 mx-auto mb-2 text-green-200" />
                        <div className="font-semibold">Network Access</div>
                        <div className="text-sm text-blue-100">Connect with industry leaders</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="p-12">
                <h3 className="text-3xl font-bold text-slate-800 mb-8">Application Process</h3>
                <div className="space-y-8">
                  {applicationProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6 p-8 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-2xl flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            {step.step}
                          </span>
                          <h4 className="text-2xl font-bold text-slate-800">{step.title}</h4>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                    <h4 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h4>
                    <p className="text-slate-600 text-lg mb-6">
                      Join our exclusive network of elite developers and gain access to premium opportunities 
                      that aren't available through traditional job boards.
                    </p>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 mx-auto">
                      <span>Apply Now</span>
                      <ArrowRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunityDetails;