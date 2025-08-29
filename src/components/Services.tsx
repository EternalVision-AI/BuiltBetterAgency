import React from 'react';
import { Search, Users, Target, CheckCircle, Code, Globe, Clock, Shield, Briefcase, Star, TrendingUp, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Elite Talent Sourcing",
      description: "Access our exclusive network of senior JavaScript and TypeScript developers with proven track records at top-tier companies.",
      features: [
        "Rigorous technical screening process",
        "Advanced algorithm and system design assessments", 
        "Cultural fit and communication evaluation",
        "Portfolio and project deep-dive reviews"
      ],
      highlight: "Premium Network"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Executive Career Placement",
      description: "Connect with C-level and senior leadership positions at unicorn startups and Fortune 500 companies seeking exceptional talent.",
      features: [
        "Personalized career strategy development",
        "Executive interview coaching and preparation",
        "Comprehensive salary and equity negotiation",
        "Long-term career trajectory planning"
      ],
      highlight: "Executive Focus"
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Strategic Team Building",
      description: "Comprehensive consulting services for building world-class remote development teams with proven methodologies.",
      features: [
        "Remote team architecture design",
        "Scalable hiring process optimization",
        "Technical leadership placement",
        "Performance and productivity frameworks"
      ],
      highlight: "Enterprise Solutions"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Premium Vetting & Compliance",
      description: "Industry-leading verification processes ensuring the highest quality placements with full legal compliance and documentation.",
      features: [
        "Comprehensive background verification",
        "Technical skill validation and certification",
        "Legal documentation and compliance",
        "Ongoing performance monitoring"
      ],
      highlight: "Quality Assured"
    }
  ];

  const specializations = [
    { tech: "React/Next.js", level: "Expert", demand: "High", icon: "⚛️" },
    { tech: "Node.js/Express", level: "Senior", demand: "Very High", icon: "🟢" },
    { tech: "TypeScript", level: "Advanced", demand: "Critical", icon: "🔷" },
    { tech: "AWS/Cloud", level: "Professional", demand: "High", icon: "☁️" },
    { tech: "GraphQL", level: "Specialist", demand: "Growing", icon: "🔗" },
    { tech: "DevOps/CI/CD", level: "Expert", demand: "Essential", icon: "⚙️" }
  ];

  const stats = [
    { icon: <Code className="h-8 w-8" />, value: "1,200+", label: "Developers Placed", color: "from-blue-500 to-indigo-600" },
    { icon: <Briefcase className="h-8 w-8" />, value: "150+", label: "Partner Companies", color: "from-purple-500 to-pink-600" },
    { icon: <Clock className="h-8 w-8" />, value: "7", label: "Avg Days to Hire", color: "from-green-500 to-emerald-600" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "98%", label: "Success Rate", color: "from-orange-500 to-red-600" }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Premium Services</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Comprehensive Recruitment Solutions</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We provide end-to-end recruitment services that connect exceptional talent with innovative companies, 
            specializing in remote JavaScript and TypeScript development roles with competitive compensation packages.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
                    <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.highlight}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specializations */}
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-8">Technical Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{spec.icon}</span>
                  <div>
                    <div className="font-bold text-slate-800">{spec.tech}</div>
                    <div className="text-sm text-slate-500">{spec.level} Level</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Market Demand</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    spec.demand === 'Critical' ? 'bg-red-100 text-red-700' :
                    spec.demand === 'Very High' ? 'bg-orange-100 text-orange-700' :
                    spec.demand === 'High' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {spec.demand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-center mb-12">Our Track Record</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;