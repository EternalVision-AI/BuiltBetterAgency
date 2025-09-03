import React, { useState } from 'react';
import { Shield, Scale, Clock, Briefcase, DollarSign, Users, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqCategories = [
    {
      title: "Process & Legitimacy",
      icon: <Shield className="h-6 w-6" />,
      questions: [
        {
          question: "Is this process completely legal and legitimate?",
          answer: "Absolutely. Our entire process operates within full legal compliance. We handle all documentation, verification, and legal requirements to ensure complete legitimacy. We work with established companies seeking remote talent, and all arrangements are professionally documented and legally sound."
        },
        {
          question: "How do you handle verification and legal documentation?",
          answer: "We manage all aspects of professional verification including background checks, credential validation, and legal documentation. Our team includes legal professionals who ensure every placement meets industry standards and regulatory requirements."
        },
        {
          question: "What kind of companies do you work with?",
          answer: "We partner exclusively with established, reputable companies actively seeking senior software developers. These include Fortune 500 companies, fast-growing startups, and established tech firms with proven track records of remote work success."
        }
      ]
    },
    {
      title: "Income & Compensation",
      icon: <DollarSign className="h-6 w-6" />,
      questions: [
        {
          question: "How is the salary split determined?",
          answer: "Salary splits are negotiated based on several factors including the complexity of placement, level of support required, and market rates. Typically, developers retain 60-70% of the total compensation, with the remainder covering our comprehensive services and ongoing support."
        },
        {
          question: "What's the average income increase developers see?",
          answer: "Our developers typically see a 120-200% increase in their total income. The average developer goes from earning $80-120K at a single company to earning $180-300K across multiple strategic positions."
        },
        {
          question: "When do I start earning from multiple positions?",
          answer: "Most developers are placed in their first additional position within 4-6 weeks. Full income optimization (2-3 positions) typically takes 6-12 weeks depending on your specialization and interview performance."
        }
      ]
    },
    {
      title: "Work Management",
      icon: <Clock className="h-6 w-6" />,
      questions: [
        {
          question: "How do you manage time across multiple companies?",
          answer: "We provide comprehensive time management strategies and tools. Most successful developers work with companies in different time zones or with flexible schedules. We also provide ongoing consultation on workload distribution and efficiency optimization."
        },
        {
          question: "What happens if there are scheduling conflicts?",
          answer: "Our team provides ongoing support to help manage any conflicts. We work with you to establish boundaries, optimize schedules, and handle any professional communications needed to maintain smooth operations across all positions."
        },
        {
          question: "Can I maintain my current job while starting this process?",
          answer: "Absolutely. Many developers begin our process while maintaining their current position. We work around your schedule for interviews and onboarding, ensuring a smooth transition without disrupting your current income."
        }
      ]
    },
    {
      title: "Requirements & Qualifications",
      icon: <Briefcase className="h-6 w-6" />,
      questions: [
        {
          question: "What level of experience do I need?",
          answer: "We focus on senior developers with 3+ years of professional software experience. You should be comfortable with technical interviews, have strong communication skills, and experience with remote work environments."
        },
        {
          question: "Do I need to be located in a specific region?",
          answer: "No, we work with developers globally. However, you should have strong English communication skills and be comfortable working during business hours for companies in major time zones (US, EU, Asia-Pacific)."
        },
        {
          question: "What if I fail an interview or don't get selected?",
          answer: "We provide comprehensive interview preparation and coaching. If you don't succeed initially, we analyze the feedback, provide additional training, and continue working with you until you're successfully placed. Our 98% success rate reflects our commitment to your success."
        }
      ]
    }
  ];

  return (
    <section id="faq-detail" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our process, legitimacy, and how we help developers maximize their earning potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const itemKey = `${categoryIndex}-${index}`;
                  const isOpen = openItems[itemKey];
                  
                  return (
                    <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                      <button
                        onClick={() => toggleItem(itemKey)}
                        className="w-full px-6 py-4 text-left font-medium text-gray-900 hover:text-blue-600 flex items-center justify-between"
                      >
                        {faq.question}
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/90 text-lg mb-4">
              Schedule a confidential consultation to discuss your specific situation and career goals.
            </p>
            <p className="text-white/80">
              Email: <span className="font-semibold text-yellow-300">tony.builtbetter@gmail.com</span> • 
              Response within 8 hours guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
