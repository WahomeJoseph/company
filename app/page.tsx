import HeroSlider from "@/components/hero/HeroSlider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Cloud, Shield, Smartphone, Network, Brain, Star, CheckCircle, Users, Target, BarChart, MessageSquare, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      href: "/services/web-development",
      image: "/modern-web-development-coding-interface-with-react.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      href: "/services/mobile-apps",
      image: "/mobile-app-development-with-smartphone-screens-sho.jpg",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for your business.",
      href: "/services/cloud-solutions",
      image: "/cloud-computing-infrastructure-with-servers-and-da.jpg",
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Robust network design and implementation for enterprise environments.",
      href: "/services/network-infrastructure",
      image: "/network-infrastructure-with-cables-servers-and-con.jpg",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      href: "/services/cybersecurity",
      image: "/images/cybersecurity-shield.png",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and ML algorithms.",
      href: "/services/ai-ml",
      image: "/artificial-intelligence-neural-network-with-data-p.jpg",
    },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Complete online store with payment integration and inventory management",
      category: "Web Development",
      image: "/ecommerce-platform-project.jpg"
    },
    {
      title: "Healthcare Management System",
      description: "Custom software for patient records and appointment scheduling",
      category: "Mobile App",
      image: "/healthcare-management-system.jpg"
    },
    {
      title: "Enterprise Cloud Migration",
      description: "Seamless transition to cloud infrastructure for a financial institution",
      category: "Cloud Solutions",
      image: "/cloud-migration-project.jpg"
    }
  ]

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Team Members" },
    { value: "10+", label: "Years of Experience" },
  ]

  const testimonials = [
    {
      quote: "Digital Fixers transformed our outdated website into a modern platform that increased our leads by 40% in just three months.",
      name: "Sarah K.",
      company: "Nairobi Retail Business",
      rating: 5
    },
    {
      quote: "Their team understood our vision perfectly and delivered a complex web application that exceeded our expectations.",
      name: "James M.",
      company: "Tech Startup Founder",
      rating: 5
    },
    {
      quote: "The cybersecurity solutions implemented have protected our business from multiple threats. Highly recommended!",
      name: "David W.",
      company: "Financial Services Company",
      rating: 5
    }
  ]

  const process = [
    {
      step: "Consultation",
      description: "We discuss your requirements and business goals",
      icon: MessageSquare
    },
    {
      step: "Planning",
      description: "We create a detailed project roadmap and strategy",
      icon: Target
    },
    {
      step: "Development",
      description: "Our experts build your solution using best practices",
      icon: Code
    },
    {
      step: "Support",
      description: "We provide ongoing maintenance and updates",
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <HeroSlider />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">{stat.value}</div>
                <div className="text-sm text-emerald-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to meet your business needs and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-gray-200 bg-white overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 leading-relaxed text-gray-600">
                      {service.description}
                    </CardDescription>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto font-medium text-emerald-600 hover:text-emerald-700"
                    >
                      <Link href={service.href} className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure your project's success from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-600 transition-colors shadow-md">
                      <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.step}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of our successful implementations across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Digital Fixers?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through expertise, dedication, and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our skilled professionals bring years of experience and specialized knowledge to every project.</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">We maintain the highest standards through rigorous testing and quality control processes.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-Driven</h3>
                  <p className="text-gray-600">We focus on delivering measurable results that contribute to your business growth and success.</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">We provide continuous maintenance and support to ensure your solutions remain effective and up-to-date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your technology goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-700 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600"
            >
              <Link href="/get-quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
