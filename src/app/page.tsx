"use client";

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
                  <svg
                    className="w-6 h-6 text-bg-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-primary/0 group-hover:text-secondary transition-colors">
                    The Dialogue
                  </h1>
                  <p className="text-xs text-secondary/60 -mt-1">
                    GDi Initiative
                  </p>
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
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-6 h-6 text-secondary transition-transform ${
                    mobileMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
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
            <span className="text-white text-sm font-medium tracking-wide">
              Empowering Youth Through Dialogue
            </span>
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
            Join us in fostering meaningful conversations and generating
            innovative solutions for tomorrow&apos;s challenges. Be part of a
            movement that shapes policy, drives change, and builds the future.
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
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>

            <a
              href="#about"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 min-w-[200px]"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/30 grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                500+
              </div>
              <div className="text-sm text-white">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                50+
              </div>
              <div className="text-sm text-white">Debates Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                20+
              </div>
              <div className="text-sm text-white">Expert Mentors</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white hover:text-accent transition-colors"
          >
            <span className="text-xs font-medium tracking-wider drop-shadow-md">
              SCROLL
            </span>
            <svg
              className="w-6 h-6 drop-shadow-md"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  Who We Are
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                About GDi Dialogue
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-secondary leading-relaxed">
                  At <strong className="text-primary">GDi</strong>, discussions
                  and debates are central to how we solve problems. This ethos
                  is now being extended to the youth ecosystem through{" "}
                  <strong className="text-secondary">
                    GDi Dialogue: Charting India&apos;s Future - One Debate at a
                    Time
                  </strong>
                  .
                </p>

                <p className="text-lg text-secondary leading-relaxed">
                  We foster a culture of great ideas and dialogue as powerful
                  tools for problem-solving. This inspired the creation of{" "}
                  <strong className="text-primary">GDi Dialogue</strong>, a
                  platform dedicated to fostering meaningful conversations and
                  generating innovative solutions.
                </p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-lg text-secondary font-medium leading-relaxed">
                    Join us in shaping the future through the power of
                    thoughtful debate and collaborative problem-solving.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <h4 className="font-semibold text-secondary">
                      Youth-Focused
                    </h4>
                  </div>
                  <p className="text-sm text-secondary/80">
                    Empowering the next generation
                  </p>
                </div>

                <div className="bg-accent/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h4 className="font-semibold text-secondary">
                      Solution-Driven
                    </h4>
                  </div>
                  <p className="text-sm text-secondary/80">
                    Ideas that create impact
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://picsum.photos/600/500"
                alt="About GDi Dialogue"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-secondary">
                      Building Tomorrow
                    </p>
                    <p className="text-sm text-secondary/70">
                      Through Dialogue & Debate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Card Layout */}
      <section
        id="features"
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Benefits
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Why Join The Dialogue?
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Discover the benefits of being part of our vibrant community and
              unlock your potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Enhanced Design */}
            <div className="group bg-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-2">
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                {/* Decorative Dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-4 border-surface"></div>
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                Connect with Leaders
              </h3>
              <p className="text-secondary/80 leading-relaxed mb-6">
                Engage with thought leaders, policymakers, and changemakers who
                are shaping India&apos;s future through meaningful dialogue.
              </p>

              {/* Feature List */}
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-secondary/70">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Network with experts</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary/70">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Mentorship opportunities</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Enhanced Design */}
            <div className="group bg-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-2">
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                {/* Decorative Dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-4 border-surface"></div>
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                Innovative Solutions
              </h3>
              <p className="text-secondary/80 leading-relaxed mb-6">
                Contribute to solving real-world problems through structured
                debates and collaborative brainstorming sessions.
              </p>

              {/* Feature List */}
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-secondary/70">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Real-world impact</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary/70">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Policy influence</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Enhanced Design */}
            <div className="group bg-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 hover:-translate-y-2">
              {/* Icon with Gradient Background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                {/* Decorative Dot */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-4 border-surface"></div>
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                Skill Development
              </h3>
              <p className="text-secondary/80 leading-relaxed mb-6">
                Enhance your critical thinking, public speaking, and analytical
                skills through structured debate formats and workshops.
              </p>

              {/* Feature List */}
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-secondary/70">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Professional workshops</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary/70">
                  <svg
                    className="w-4 h-4 text-primary flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Certificates awarded</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-secondary/80 mb-6">
              Ready to make a difference?
            </p>
            <a
              href="YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Join Our Community</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Key Points Section - What We Offer */}
      <section className="py-20 bg-surface relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="order-2 md:order-1">
              <div className="relative h-96 md:h-[550px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://picsum.photos/600/550"
                  alt="What We Offer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>

                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-secondary/60">
                            Active Members
                          </p>
                          <p className="font-bold text-secondary">500+</p>
                        </div>
                      </div>
                      <div className="text-success font-semibold text-sm">
                        +25%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 md:order-2">
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  Opportunities
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                What We Offer
              </h2>

              <p className="text-lg text-secondary/80 mb-8">
                Join a comprehensive program designed to enhance your skills,
                expand your network, and amplify your impact.
              </p>

              {/* Enhanced List Items */}
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary mb-1">
                      Regular Debate Competitions
                    </h4>
                    <p className="text-secondary/70">
                      Engage in debates on current national and global issues
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-secondary to-secondary-hover rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary mb-1">
                      Expert Mentorship
                    </h4>
                    <p className="text-secondary/70">
                      Learn from industry experts and thought leaders
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary mb-1">
                      Networking Opportunities
                    </h4>
                    <p className="text-secondary/70">
                      Connect with like-minded individuals and leaders
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary mb-1">
                      Recognition & Certificates
                    </h4>
                    <p className="text-secondary/70">
                      Get recognized for your active participation
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-secondary to-secondary-hover rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary mb-1">
                      Exclusive Workshops
                    </h4>
                    <p className="text-secondary/70">
                      Access specialized training sessions and workshops
                    </p>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary mb-1">
                      Voice Your Ideas
                    </h4>
                    <p className="text-secondary/70">
                      Platform to share your ideas and make an impact
                    </p>
                  </div>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="YOUR_GOOGLE_FORM_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Start Your Journey</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordions */}
      <section
        id="faq"
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                FAQ
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Find answers to common questions about The Dialogue
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="group bg-surface rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-start gap-4 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      openFAQ === 0 ? "bg-primary" : "bg-primary/10"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        openFAQ === 0 ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg text-secondary pr-4">
                    Who can participate in GDi Dialogue?
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                    openFAQ === 0 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === 0 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 py-5 bg-accent/20 border-t border-accent/30">
                  <p className="text-secondary/90 leading-relaxed pl-12">
                    GDi Dialogue is open to all young individuals, students,
                    professionals, and anyone passionate about contributing to
                    meaningful discussions and debates on India&apos;s future.
                    We welcome participants from diverse backgrounds and
                    perspectives.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="group bg-surface rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-start gap-4 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      openFAQ === 1 ? "bg-primary" : "bg-primary/10"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        openFAQ === 1 ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg text-secondary pr-4">
                    How do I register for events?
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                    openFAQ === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === 1 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 py-5 bg-accent/20 border-t border-accent/30">
                  <p className="text-secondary/90 leading-relaxed pl-12">
                    You can register by clicking the &quot;Register Now&quot;
                    button on this page, which will direct you to our
                    registration form. Fill in your details, and you&apos;ll
                    receive confirmation along with updates about upcoming
                    events and activities.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="group bg-surface rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-start gap-4 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      openFAQ === 2 ? "bg-primary" : "bg-primary/10"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        openFAQ === 2 ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg text-secondary pr-4">
                    What topics are covered in the debates?
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                    openFAQ === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === 2 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 py-5 bg-accent/20 border-t border-accent/30">
                  <p className="text-secondary/90 leading-relaxed pl-12">
                    Our debates cover a wide range of topics including policy,
                    economics, technology, environment, social issues, and
                    governance. We focus on current affairs and issues that are
                    relevant to India&apos;s development and future trajectory.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="group bg-surface rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-start gap-4 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      openFAQ === 3 ? "bg-primary" : "bg-primary/10"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        openFAQ === 3 ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg text-secondary pr-4">
                    Is there any fee to participate?
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                    openFAQ === 3 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === 3 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 py-5 bg-accent/20 border-t border-accent/30">
                  <p className="text-secondary/90 leading-relaxed pl-12">
                    Most of our events and activities are free to participate
                    in. However, some special workshops or events may have a
                    nominal registration fee to cover operational costs. Details
                    will be provided during event announcements.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="group bg-surface rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/30 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-start gap-4 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      openFAQ === 4 ? "bg-primary" : "bg-primary/10"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        openFAQ === 4 ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg text-secondary pr-4">
                    How can I stay updated about upcoming events?
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${
                    openFAQ === 4 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === 4 ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 py-5 bg-accent/20 border-t border-accent/30">
                  <p className="text-secondary/90 leading-relaxed pl-12">
                    Once you register, you&apos;ll be added to our mailing list
                    and will receive regular updates about upcoming events,
                    workshops, and opportunities. You can also follow us on our
                    social media channels for the latest news and announcements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center p-8 bg-surface rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-secondary mb-3">
              Still have questions?
            </h3>
            <p className="text-secondary/80 mb-6">
              We&apos;re here to help! Get in touch with our team.
            </p>
            <a
              href="YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#2d3a2b] via-[#3a4738] to-[#404E3B] text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
              {/* Brand Section */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">The Dialogue</h3>
                    <p className="text-xs text-gray-300">by GDi</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  GDi Dialogue: Charting India&apos;s Future - One Debate at a
                  Time
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Empowering youth through meaningful conversations and
                  innovative problem-solving.
                </p>

                {/* CTA Button */}
                <a
                  href="YOUR_GOOGLE_FORM_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Join Now</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>Features</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>FAQ</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="md:col-span-2">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>Events</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect Section */}
              <div className="md:col-span-3">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Connect With Us
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Follow us on social media for updates and announcements
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-3 mb-6">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>

                {/* Newsletter */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-sm text-gray-300 mb-3">
                    Subscribe to our newsletter
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                    <button className="px-4 py-2 bg-primary hover:bg-primary-hover rounded-lg transition-colors">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  &copy; {new Date().getFullYear()} GDi Dialogue. All rights
                  reserved.
                </p>

                <div className="flex gap-6 text-sm">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
