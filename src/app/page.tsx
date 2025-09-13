"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const features = [
    {
      title: "Secure API Key Management",
      description: "Generate, rotate, and revoke API keys with enterprise-grade security. Monitor usage patterns and detect anomalies in real-time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Real-time Analytics",
      description: "Track API usage, error rates, and performance metrics with interactive dashboards and customizable alerts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Multi-service Integration",
      description: "Manage API keys for Stripe, AWS, Google Analytics, SendGrid, Twilio and more from a single unified dashboard.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Automated Monitoring",
      description: "Set custom thresholds and receive instant notifications when usage patterns deviate from normal behavior.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "APIGuardian has completely transformed how we manage our API infrastructure. We've reduced security incidents by 85% and saved over 20 hours per week on manual key management.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer, DataFlow Inc",
      content: "The real-time analytics dashboard gives us unprecedented visibility into our API usage patterns. Our team can now proactively address performance issues before they impact users.",
      avatar: "MR"
    },
    {
      name: "Emily Davis",
      role: "Infrastructure Manager, CloudSolutions",
      content: "As a multi-team organization, having a centralized API key management system has been a game-changer. The user permissions and audit logs have improved our compliance posture significantly.",
      avatar: "ED"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-md border-b sticky top-0 z-50`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">APIGuardian</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="font-medium hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="font-medium hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="font-medium hover:text-blue-400 transition-colors">Testimonials</a>
              <a href="#contact" className="font-medium hover:text-blue-400 transition-colors">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Sign In
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button                
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="font-medium hover:text-blue-400 transition-colors py-2">Features</a>
                <a href="#pricing" className="font-medium hover:text-blue-400 transition-colors py-2">Pricing</a>
                <a href="#testimonials" className="font-medium hover:text-blue-400 transition-colors py-2">Testimonials</a>
                <a href="#contact" className="font-medium hover:text-blue-400 transition-colors py-2">Contact</a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors self-start">
                  Sign In
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block">Secure API Key</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Management</span>
                <span className="block">for Modern Applications</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Enterprise-grade API key management that eliminates security risks, reduces operational overhead, and provides complete visibility into your API ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                  Get Started Free
                </button>
                <button className="border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-lg text-lg font-medium transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="mt-12 flex items-center text-gray-400">
                <div className="flex -space-x-2 mr-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-600 flex items-center justify-center text-xs font-medium">
                      {i}
                    </div>
                  ))}
                </div>
                <span>Trusted by 1,200+ companies worldwide</span>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-400">Admin Dashboard</span>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          S
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">Production API Key</p>
                          <p className="text-sm text-gray-400">Stripe</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200">
                          Active
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          G
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">Analytics Service</p>
                          <p className="text-sm text-gray-400">Google Analytics</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900 dark:text-green-200">
                          Active
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          A
                        </div>
                        <div className="ml-4">
                          <p className="font-medium">AWS Integration</p>
                          <p className="text-sm text-gray-400">AWS</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full dark:bg-yellow-900 dark:text-yellow-200">
                          Warning
                        </span>
                      </div>
                    </div>

                    <div className="h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm">Create New Key</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to securely manage API keys across all your services with enterprise-grade controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                  }`}
              >
                <div className="text-blue-400 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,200+", label: "Companies Trust Us" },
              { number: "99.99%", label: "Uptime Guarantee" },
              { number: "20+ hrs", label: "Saved Per Week" },
              { number: "15+", label: "Integrations" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-500 hover:transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of developers and DevOps teams who trust APIGuardian to secure their API infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-500 hover:transform hover:-translate-y-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                  }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex mt-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Secure Your APIs?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of companies already using APIGuardian to eliminate security risks and streamline API management.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:bg-white hover:text-blue-900">
              Schedule Demo
            </button>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            {isSubmitted && (
              <p className="mt-4 text-green-400 font-medium">Thanks for subscribing! You'll hear from us soon.</p>
            )}
            <p className="mt-4 text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">APIGuardian</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Enterprise-grade API key management for modern applications.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'github', 'linkedin'].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 .005 5.373.005 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.41-1.756-1.41-1.756-1.152-.79.084-.777.084-.777 1.284.09 1.958 1.32 1.958 1.32 1.14 1.954 2.996 1.39 3.742 1.072.117-.832.447-1.39 1.15-1.566-4.04-.462-8.27-2.018-8.27-8.98 0-2.003.707-3.62 1.857-4.902-.189-.454-.805-2.27.177-4.752 0 0 1.486-.47 4.867 1.807 1.413-.396 2.925-.587 4.437-.587 1.512 0 3.024.191 4.437.587 3.382-2.28 4.867-1.807 4.867-1.807.98 2.482.364 4.3.176 4.752 1.14 1.28 1.857 2.897 1.857 4.902 0 6.96-4.23 8.51-8.27 8.98.656.56 1.23 1.66 1.23 3.33 0 2.42-.21 4.36-.21 4.36-.21-.42-.07-.84-.07-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-2.24 0-.42-.01-.84-.01-1.24 0-1.24.01-1.84.01-......" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'API Documentation', 'Integrations', 'Changelog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2023 APIGuardian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;