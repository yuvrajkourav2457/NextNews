import React from 'react';
import { NewspaperIcon, Brain, Sparkles, Globe2, Users, Mail, Github, Linkedin, Twitter, ChevronRight, MessageSquare } from 'lucide-react';

function App() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "AI Research Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Editor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Emma Thompson",
      role: "Product Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  const stats = [
    { number: "10M+", label: "Active Readers" },
    { number: "50K+", label: "Articles Analyzed Daily" },
    { number: "99%", label: "Accuracy Rate" },
    { number: "24/7", label: "Real-time Updates" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative bg-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#4c1d95_0%,#6d28d9_50%,#7c3aed_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Revolutionizing News with Artificial Intelligence</h1>
            <p className="text-xl text-purple-100 mb-8">We're combining cutting-edge AI technology with traditional journalism to deliver personalized, accurate, and timely news coverage to millions of readers worldwide.</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors inline-flex items-center gap-2">
              Learn More
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NewsAI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Brain className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">Our advanced AI algorithms analyze thousands of news sources to deliver the most relevant and accurate information.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Sparkles className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Personalized Experience</h3>
              <p className="text-gray-600">Get news tailored to your interests while discovering new perspectives and topics.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <Globe2 className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold mb-4">Global Coverage</h3>
              <p className="text-gray-600">Access news from around the world, translated and summarized in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-purple-600">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-purple-600">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-purple-600">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-8">Have questions about NewsAI? We'd love to hear from you.</p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
              <button className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg border border-purple-200 hover:border-purple-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;