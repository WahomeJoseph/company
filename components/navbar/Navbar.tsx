"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
 const  navigate= useRouter()
  const toggleMenu = () => setIsOpen(!isOpen)

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
    { name: "Network Infrastructure", href: "/services/network-infrastructure" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "AI & Machine Learning", href: "/services/ai-ml" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TechSolutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              About
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="w-full hover:text-emerald-600">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Portfolio
            </Link>
 <Link href="/pricing" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Pricing
            </Link>

            <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">
              Contact
            </Link>

           <Button asChild className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white">
  <Link href="/quote">Get Quote</Link>
</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-900 mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-1 text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/portfolio"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
               <Link
                href="/pricing"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 pt-2">
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/get-quote" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
