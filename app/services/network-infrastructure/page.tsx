import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Network, Router, Wifi, Cable, Monitor, Settings } from "lucide-react"
import Link from "next/link"

export default function NetworkInfrastructurePage() {
  const technologies = ["Cisco", "Juniper", "Fortinet", "Ubiquiti", "Meraki", "Aruba", "SonicWall", "Palo Alto"]

  const services = [
    {
      icon: Network,
      title: "Network Design",
      description: "Custom network architecture designed for optimal performance and scalability.",
    },
    {
      icon: Router,
      title: "Router & Switch Configuration",
      description: "Professional setup and configuration of enterprise-grade networking equipment.",
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Comprehensive WiFi infrastructure with seamless coverage and security.",
    },
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Professional cable management and structured cabling systems installation.",
    },
    {
      icon: Monitor,
      title: "Network Monitoring",
      description: "24/7 network monitoring and performance optimization services.",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your network infrastructure.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/network-infrastructure-with-cables-servers-and-con.jpg')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Network Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Build robust, secure, and scalable network infrastructure that supports your business operations and
              growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact">
                  Plan Your Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Network Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete network infrastructure solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-gray-200 bg-white">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies & Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with industry-leading networking equipment and technology partners
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} className="text-sm px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.9), rgba(5, 150, 105, 0.9)), url('/modern-office-space-with-technology-and-teamwork.jpg')`,
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Upgrade Your Network?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's design and implement a network infrastructure that powers your business success
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100">
            <Link href="/contact">
              Get Network Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
