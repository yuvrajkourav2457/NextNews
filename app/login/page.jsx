"use client";
import React, { useState } from 'react';
import { NewspaperIcon, Sparkles, ArrowRight, Mail, Lock, User } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center md:text-left space-y-6 p-8">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <NewspaperIcon className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">NewsAI</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800">
            Stay Informed with AI-Powered News
          </h1>
          <p className="text-gray-600">
            Get personalized news updates and insights powered by artificial intelligence.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-700">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span>AI-Curated Content</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span>Smart Summarization</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span>Personalized Feed</span>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;