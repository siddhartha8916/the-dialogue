'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center group">
              <a href="#home" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-primary/0 group-hover:text-secondary transition-colors">
                    The Dialogue
                  </h1>
                  <p className="text-xs text-secondary/60 -mt-1">GDi Initiative</p>
                </div>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a 
                href="#home" 
                className="relative px-4 py-2 text-secondary font-medium hover:text-primary transition-colors group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a 
                href="#about" 
                className="relative px-4 py-2 text-secondary font-medium hover:text-primary transition-colors group"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a 
                href="#features" 
                className="relative px-4 py-2 text-secondary font-medium hover:text-primary transition-colors group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a 
                href="#faq" 
                className="relative px-4 py-2 text-secondary font-medium hover:text-primary transition-colors group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a 
                href="YOUR_GOOGLE_FORM_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                <span>Register Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg 
                  className={`w-6 h-6 text-secondary transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-2 bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-secondary font-medium hover:bg-accent/30 hover:text-primary rounded-lg transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-secondary font-medium hover:bg-accent/30 hover:text-primary rounded-lg transition-colors"
            >
              About
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-secondary font-medium hover:bg-accent/30 hover:text-primary rounded-lg transition-colors"
            >
              Features
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-secondary font-medium hover:bg-accent/30 hover:text-primary rounded-lg transition-colors"
            >
              FAQ
            </a>
            <a 
              href="YOUR_GOOGLE_FORM_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block sm:hidden px-4 py-3 bg-primary hover:bg-primary-hover text-white text-center font-semibold rounded-lg transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Hero Background"
            fill
            className="object-cover scale-110 transition-transform duration-1000"
            priority
          />
          {/* Stronger Gradient Overlays for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-secondary/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
          {/* Badge/Label */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-6 py-2 mb-8 animate-fade-in shadow-lg">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium tracking-wide">Empowering Youth Through Dialogue</span>
          </div>

          {/* Main Heading - Solid White for Maximum Visibility */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight animate-slide-up drop-shadow-2xl">
            <span className="block mb-2">GDi Dialogue</span>
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              Charting India&apos;s Future
            </span>
          </h1>

          {/* Subheading - Bright Accent Color */}
          <p className="text-2xl md:text-3xl text-white font-semibold mb-6 animate-slide-up delay-200 drop-shadow-lg">
            One Debate at a Time
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300 drop-shadow-md">
            Join us in fostering meaningful conversations and generating innovative solutions for tomorrow&apos;s challenges. 
            Be part of a movement that shapes policy, drives change, and builds the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-400">
            <a 
              href="YOUR_GOOGLE_FORM_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/50 min-w-[200px]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-hover to-primary-active"></span>
              <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              <span className="relative flex items-center gap-2">
                Join The Dialogue
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            <a 
              href="#about" 
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 min-w-[200px]"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/30 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">500+</div>
              <div className="text-sm text-white">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">50+</div>
              <div className="text-sm text-white">Debates Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">20+</div>
              <div className="text-sm text-white">Expert Mentors</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-white hover:text-accent transition-colors">
            <span className="text-xs font-medium tracking-wider drop-shadow-md">SCROLL</span>
            <svg className="w-6 h-6 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">About GDi Dialogue</h2>
              <p className="text-lg text-secondary mb-4">
                At GDi, discussions and debates are central to how we solve problems. This ethos is now being extended to the youth ecosystem through <strong>GDi Dialogue: Charting India&apos;s Future - One Debate at a Time</strong>.
              </p>
              <p className="text-lg text-secondary mb-4">
                We foster a culture of great ideas and dialogue as powerful tools for problem-solving, and this inspired the creation of GDi Dialogue, a platform dedicated to fostering meaningful conversations and generating innovative solutions.
              </p>
              <p className="text-lg text-secondary">
                Join us in shaping the future through the power of thoughtful debate and collaborative problem-solving.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/600/400"
                alt="About GDi Dialogue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Layout */}
      <section id="features" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Why Join The Dialogue?</h2>
          <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
            Discover the benefits of being part of our vibrant community
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-surface rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Connect with Leaders</h3>
              <p className="text-secondary">
                Engage with thought leaders, policymakers, and changemakers who are shaping India&apos;s future through meaningful dialogue.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Innovative Solutions</h3>
              <p className="text-secondary">
                Contribute to solving real-world problems through structured debates and collaborative brainstorming sessions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-surface rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Skill Development</h3>
              <p className="text-secondary">
                Enhance your critical thinking, public speaking, and analytical skills through structured debate formats and workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section - Bullet Points */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/600/500"
                alt="Key Highlights"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-8">What We Offer</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-secondary">Regular debate competitions on current national and global issues</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-secondary">Mentorship from industry experts and thought leaders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-secondary">Networking opportunities with like-minded individuals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-secondary">Recognition and certificates for active participation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-secondary">Access to exclusive workshops and training sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-secondary">Platform to voice your ideas and make an impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordions */}
      <section id="faq" className="py-20" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-secondary mb-12">
            Find answers to common questions about The Dialogue
          </p>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="bg-surface rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
              >
                <span className="font-semibold text-lg text-secondary">Who can participate in GDi Dialogue?</span>
                <svg 
                  className={`w-6 h-6 text-primary transition-transform ${openFAQ === 0 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 0 && (
                <div className="px-6 py-4 bg-accent">
                  <p className="text-secondary">
                    GDi Dialogue is open to all young individuals, students, professionals, and anyone passionate about contributing to meaningful discussions and debates on India&apos;s future. We welcome participants from diverse backgrounds and perspectives.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-surface rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
              >
                <span className="font-semibold text-lg text-secondary">How do I register for events?</span>
                <svg 
                  className={`w-6 h-6 text-primary transition-transform ${openFAQ === 1 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 1 && (
                <div className="px-6 py-4 bg-accent">
                  <p className="text-secondary">
                    You can register by clicking the &quot;Register Now&quot; button on this page, which will direct you to our registration form. Fill in your details, and you&apos;ll receive confirmation along with updates about upcoming events and activities.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-surface rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
              >
                <span className="font-semibold text-lg text-secondary">What topics are covered in the debates?</span>
                <svg 
                  className={`w-6 h-6 text-primary transition-transform ${openFAQ === 2 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 2 && (
                <div className="px-6 py-4 bg-accent">
                  <p className="text-secondary">
                    Our debates cover a wide range of topics including policy, economics, technology, environment, social issues, and governance. We focus on current affairs and issues that are relevant to India&apos;s development and future trajectory.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-surface rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
              >
                <span className="font-semibold text-lg text-secondary">Is there any fee to participate?</span>
                <svg 
                  className={`w-6 h-6 text-primary transition-transform ${openFAQ === 3 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 3 && (
                <div className="px-6 py-4 bg-accent">
                  <p className="text-secondary">
                    Most of our events and activities are free to participate in. However, some special workshops or events may have a nominal registration fee to cover operational costs. Details will be provided during event announcements.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-surface rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
              >
                <span className="font-semibold text-lg text-secondary">How can I stay updated about upcoming events?</span>
                <svg 
                  className={`w-6 h-6 text-primary transition-transform ${openFAQ === 4 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === 4 && (
                <div className="px-6 py-4 bg-accent">
                  <p className="text-secondary">
                    Once you register, you&apos;ll be added to our mailing list and will receive regular updates about upcoming events, workshops, and opportunities. You can also follow us on our social media channels for the latest news and announcements.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">The Dialogue</h3>
              <p className="text-gray-300 mb-4">
                GDi Dialogue: Charting India&apos;s Future - One Debate at a Time
              </p>
              <p className="text-gray-300">
                Empowering youth through meaningful conversations and innovative problem-solving.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} GDi Dialogue. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
