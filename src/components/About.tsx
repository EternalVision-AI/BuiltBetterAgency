import React from 'react';
import { Award, Shield, Users, TrendingUp, CheckCircle, Globe } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: <Users className="h-8 w-8" />, number: "150+", label: "Developers Placed" },
    { icon: <Globe className="h-8 w-8" />, number: "30+", label: "Partner Companies" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "167%", label: "Avg Income Increase" },
    { icon: <Award className="h-8 w-8" />, number: "98%", label: "Success Rate" }
  ];

  const certifications = [
    "Certified Recruitment Professional (CRP)",
    "Remote Work Specialist Certification",
    "Technical Interview Excellence Award",
    "Industry Leading Placement Rate Recognition"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              About <span className="text-blue-600">Tony Lim</span> &amp; BuiltBetter
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                As Director of BuiltBetter Agency, I've dedicated my career to revolutionizing how talented developers maximize their earning potential in the remote work economy. With over 8 years in technical recruitment and placement, I've witnessed firsthand the disconnect between developer capabilities and traditional employment limitations.
              </p>
              <p>
                As you know, when working on platforms like Upwork or Freelancer, it’s often very difficult to secure a project from the bulk-bidded posts filled with countless competitors. Even receiving a single message from a client, let alone getting to the interview stage, can be a real challenge.
              </p>
              <p>
                But with our approach, you’ll experience a completely different reality. We guarantee daily calls and provide a system that increases your chances of landing opportunities by 10x compared to traditional freelancing marketplaces.
              </p>
              <p>
                Our agency was founded on a simple principle: exceptional developers deserve exceptional opportunities. We've pioneered a strategic approach that allows senior software developers to leverage their skills across multiple premium positions, creating unprecedented income streams while maintaining professional excellence.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-blue-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust &amp; Security</h3>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  All placements are handled with complete legal compliance and professional integrity. We maintain the highest standards of confidentiality and security.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  ✓ Full Legal Documentation<br />
                  ✓ Professional Verification<br />
                  ✓ Confidentiality Guaranteed
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200">
                  <div className="flex justify-center mb-2">
                    <div className="text-blue-600">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            "Connecting exceptional developers with exceptional opportunities"
          </h3>
          <p className="text-white/90 text-lg">
            Ready to transform your career? Let's discuss how we can help you achieve your income goals while maintaining the highest professional standards.
          </p>
          <div className="mt-4 text-white/80">
            <strong>Tony Lim</strong>, Director • BuiltBetter Agency
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;