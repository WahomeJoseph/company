import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-white">TechSolutions</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading software and network service company delivering innovative solutions for businesses worldwide. We
              transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/network-infrastructure"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Network Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ml" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:info@techsolutions.com"
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  info@techsolutions.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  123 Tech Street
                  <br />
                  Innovation District
                  <br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© {currentYear} TechSolutions. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
