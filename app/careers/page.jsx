import React from 'react';
import { NewspaperIcon, Brain, Code, Presentation, Megaphone, Users2, Briefcase, GraduationCap, Clock, MapPin, DollarSign, Zap, Heart, Coffee, Mail } from 'lucide-react';

function App() {
  const openPositions = [
    {
      title: "AI Research Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Content Strategy Lead",
      department: "Content",
      location: "New York, NY",
      type: "Full-time",
      icon: <Presentation className="w-6 h-6" />
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "London, UK",
      type: "Full-time",
      icon: <Megaphone className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Salary",
      description: "Industry-leading compensation with equity packages"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning Budget",
      description: "Annual budget for courses and conferences"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative bg-purple-600 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
            alt="Team working together"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Join Our Mission to Transform News</h1>
            <p className="text-xl text-purple-100 mb-8">We're looking for passionate individuals who want to revolutionize how the world consumes news through artificial intelligence.</p>
            <div className="flex gap-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors inline-flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                View Open Positions
              </button>
              <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors inline-flex items-center gap-2">
                <Users2 className="w-5 h-5" />
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Life at NewsAI</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join a team of innovators, journalists, and technologists working together to shape the future of news delivery.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                alt="Office culture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Innovation First</h4>
                    <p className="text-gray-600">We embrace new technologies and ideas to push boundaries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Collaborative Spirit</h4>
                    <p className="text-gray-600">We work together across teams to achieve our goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">User-Focused</h4>
                    <p className="text-gray-600">We put our readers first in everything we build.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Work With Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join our growing team and help shape the future of news delivery.</p>
          </div>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-200 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      {position.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{position.title}</h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
            <p className="text-gray-600 mb-8">We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              <Mail className="w-5 h-5" />
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;