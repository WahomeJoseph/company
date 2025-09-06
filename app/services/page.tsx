"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  Cloud,
  Network,
  Shield,
  Brain,
  Search,
  ChevronRight,
  Home,
  Star,
  Users,
  CheckCircle,
  Clock,
  MessageSquare,
  Play,
  Target,
  BarChart3,
  Lightbulb,
  Zap,
} from "lucide-react"

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: Code,
      href: "/services/web-development",
      features: ["React & Next.js", "Full-stack Solutions", "E-commerce Platforms", "Progressive Web Apps"],
      category: "Development",
      popular: true,
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
      href: "/services/mobile-apps",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      category: "Development",
      popular: false,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: Cloud,
      href: "/services/cloud-solutions",
      features: ["AWS & Azure", "Cloud Migration", "DevOps", "Serverless Architecture"],
      category: "Infrastructure",
      popular: true,
    },
    {
      title: "Network Infrastructure",
      description: "Robust network design and implementation for enterprise environments.",
      icon: Network,
      href: "/services/network-infrastructure",
      features: ["Network Design", "Security Implementation", "Performance Optimization", "24/7 Monitoring"],
      category: "Infrastructure",
      popular: false,
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      icon: Shield,
      href: "/services/cybersecurity",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      category: "Security",
      popular: true,
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      icon: Brain,
      href: "/services/ai-ml",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Analytics"],
      category: "AI/ML",
      popular: false,
    },
  ]

  const categories = ["All", "Development", "Infrastructure", "Security", "AI/ML"]

  const filteredServices = services.filter(
    (service) =>
      (activeCategory === "All" || service.category === activeCategory) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your requirements and create a comprehensive project roadmap.",
      icon: Lightbulb,
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team designs the solution architecture and creates detailed project plans.",
      icon: Target,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing.",
      icon: Code,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support and maintenance.",
      icon: BarChart3,
    },
  ]

  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Team Members" },
    { value: "10+", label: "Years of Experience" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Breadcrumb */}
      <nav className="py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-100 bg-white">
        <div className="container mx-auto max-w-7xl">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="flex items-center text-slate-500 hover:text-emerald-600 transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <li>
              <span className="text-emerald-600 font-medium" aria-current="page">
                Services
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm border-0 px-4 py-1.5">
              Our Expertise
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Digital Solutions for <span className="text-emerald-200">Modern Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto text-pretty mb-8">
              We provide cutting-edge technology services that help businesses innovate, scale, and succeed in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-slate-100 font-semibold">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-700"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your business
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full px-4 ${activeCategory === category ? "bg-emerald-600" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-full"
              aria-label="Search services"
            />
          </div>

          <div className="mb-8 text-center">
            <p className="text-slate-600">
              {filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.href}
                  className="group hover:shadow-xl transition-all duration-300 border border-slate-100 shadow-sm hover:shadow-emerald-100/50 hover:border-emerald-100 hover:-translate-y-2 relative overflow-hidden"
                >
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-emerald-600 text-white z-10 rounded-full py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

                  <CardHeader className="pb-4 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        <IconComponent className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <Badge variant="outline" className="text-xs bg-slate-50">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-pretty mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white group-hover:shadow-lg"
                    >
                      <Link href={service.href} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No services found</h3>
              <p className="text-slate-600 mb-4">Try adjusting your search terms or browse all services.</p>
              <Button onClick={() => setSearchTerm("")} variant="outline">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-0 px-4 py-1.5">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-balance">
              How We Deliver <span className="text-emerald-600">Excellence</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto text-pretty">
              A structured approach to ensure your project's success from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-600 transition-colors shadow-md">
                      <IconComponent className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm text-pretty">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-700/20"></div>
            <div className="relative z-10">
              <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm border-0 px-4 py-1.5">
                Let's Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Business?</h2>
              <p className="text-lg text-slate-200 mb-8 text-pretty max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your technology goals and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  <Link href="/get-quote">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
