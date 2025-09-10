'use client'

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, ArrowRight, Heart } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
    
    // Show back-to-top button when scrolling down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Newsletter Section */}
      <div className="bg-emerald-600/10 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Our Latest</h3>
              <p className="text-gray-300 max-w-md">Subscribe to our newsletter for updates on new services, tech insights, and exclusive offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent flex-grow min-w-0"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Digital Fixers
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming businesses through innovative digital solutions. We create cutting-edge software, 
              robust infrastructure, and intelligent systems that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg border-l-4 border-emerald-500 pl-3">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "Network Infrastructure",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg border-l-4 border-emerald-500 pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg border-l-4 border-emerald-500 pl-3">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                  <a
                    href="mailto:info@digitalfixers.com"
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    info@digitalfixers.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Phone</p>
                  <div className="flex flex-col items-center">
                  <a href="tel:+254795969757" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    +254 795969757
                  </a>
                  <a href="tel:+254113730593" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                    +254 113730593
                  </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">Address</p>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    Nairobi, Kenya
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Digital Fixers. Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in Kenya
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Sitemap", href: "/sitemap.xml" }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  )
}
