import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Database, Zap, Shield, Globe, Clock, Users, CheckCircle, BarChart, Target, Heart, Smartphone, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function WebDevelopmentPage() {
  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST APIs",
  ]

  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored web applications built from scratch to meet your specific business requirements.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience and accessibility in mind.",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Scalable database architecture optimized for performance and data integrity.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized code and efficient resource management.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Robust security measures including authentication, authorization, and data protection.",
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Search engine optimized applications for maximum visibility and organic traffic.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Flawless experience across all devices - desktop, tablet, and mobile.",
    },
    {
      icon: BarChart,
      title: "Analytics Integration",
      description: "Track user behavior and measure performance with integrated analytics tools.",
    },
  ]

  const benefits = [
    {
      title: "Increased Conversion Rates",
      description: "Optimized user experience that turns visitors into customers",
      icon: BarChart,
    },
    {
      title: "Competitive Advantage",
      description: "Stand out with a professionally designed, high-performance website",
      icon: Target,
    },
    {
      title: "Time & Cost Efficiency",
      description: "Streamlined processes that deliver quality results faster",
      icon: Clock,
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance and updates to keep your site running smoothly",
      icon: Users,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and technical requirements to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create wireframes and visual designs that align with your brand and optimize user experience."
    },
    {
      step: "03",
      title: "Development",
      description: "Our developers build your application using modern technologies and best practices for performance and security."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing across devices and browsers to ensure flawless functionality and user experience."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We handle the entire deployment process and ensure a smooth transition to your live environment."
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and optimization to keep your website performing at its best."
    },
  ]

  const packages = [
    {
      title: "Starter Package",
      price: "KES 45,000",
      description: "Perfect for small businesses and startups",
      features: [
        "5-7 Page Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Support"
      ],
      recommended: false
    },
    {
      title: "Business Package",
      price: "KES 85,000",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 Pages",
        "Custom Design",
        "Advanced SEO",
        "Content Management System",
        "E-commerce Functionality",
        "3 Months Support"
      ],
      recommended: true
    },
    {
      title: "Enterprise Package",
      price: "KES 150,000+",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited Pages",
        "Fully Custom Design",
        "E-commerce Integration",
        "Custom Web Applications",
        "Priority Support",
        "6 Months Maintenance"
      ],
      recommended: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-r from-emerald-300 to-emerald-400 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('/artificial-intelligence-neural-network-with-data-p.jpg')] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-600 text-white border-0 px-4 py-1.5 text-sm">
              Professional Web Development
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Build Scalable Web Solutions That Drive Business Growth</h1>
            <p className="text-xl text-emerald-100 mb-8 text-pretty">
              From stunning business websites to complex web applications, we create digital experiences that convert visitors into customers and help your business thrive online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-700 hover:bg-gray-100 font-semibold">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-none bg-emerald-900 text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in the Kenyan market, and we build websites that help local businesses succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-20 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Market Expertise</h3>
              <p className="text-gray-600 mb-6">
                With extensive experience serving Kenyan businesses across various industries, we understand what works in our local market. We design websites that resonate with Kenyan audiences while maintaining global standards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="pt-2">
                    <span className="text-black font-medium">Understanding of Kenyan consumer behavior</span>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="pt-2">
                    <span className="text-black font-medium">Knowledge of local payment integration options</span>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="pt-2">
                    <span className="text-black font-medium">Experience with local hosting and domain registration</span>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div className="pt-2">
                    <span className="text-black font-medium">Mobile-first approach for Kenya's mobile-centric users</span>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Benefits</h3>
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <Card key={index} className="p-6 border-border bg-white hover:shadow-medium transition-smooth group">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-smooth">
                          <Icon className="h-6 w-6 text-emerald-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black/80 mb-2">{benefit.title}</h4>
                          <p className="text-gray-500 text-md leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Web Development Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions that cover every aspect of your web presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-gray-200 bg-white hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Web Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, collaborative approach that ensures your vision becomes reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="border-gray-200 bg-white text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{phase.step}</div>
                  <CardTitle className="text-xl text-gray-900">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{phase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Web Development Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible options to suit businesses of all sizes and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-gray-200 bg-white text-center relative overflow-hidden ${pkg.recommended ? 'border-2 border-emerald-500 shadow-lg' : ''}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-white py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`pt-6 ${pkg.recommended ? 'mt-6' : ''}`}>
                  <CardTitle className="text-2xl text-gray-900">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600 my-4">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${pkg.recommended ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom solution? We offer tailored packages for unique requirements.</p>
            <Button asChild variant="outline">
              <Link href="/contact">Request Custom Quote</Link>
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
              Hear from Kenyan businesses that have transformed their online presence with our web development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "𝓒𝓻𝓮𝓭𝓲𝓫𝓵𝓮 𝓦𝓮𝓫𝓦𝓸𝓻𝓴𝓼 transformed our outdated website into a modern, responsive platform that has increased our leads by 40% in just three months.",
                name: "Sarah K., Nairobi Retail Business",
                role: "Business Owner"
              },
              {
                quote: "The team understood our vision perfectly and delivered a website that truly represents our brand. Their ongoing support has been exceptional.",
                name: "James M., Tourism Company",
                role: "Marketing Director"
              },
              {
                quote: "As a tech startup, we needed a complex web application. Digital Fixers delivered beyond our expectations with clean code and innovative solutions.",
                name: "David W., Tech Startup Founder",
                role: "CEO"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-gray-200 bg-white p-6">
                <div className="flex items-center mb-4">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a website that drives results for your Kenyan business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-700 hover:bg-gray-100 font-semibold">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-none bg-emerald-900 text-white hover:bg-white hover:text-emerald-600"
            >
              <Link href="/get-quote">
                <MessageSquare className="mr-2 h-5 w-5" />
                Request Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
