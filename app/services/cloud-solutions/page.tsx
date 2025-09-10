import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Server, Database, Shield, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function CloudSolutionsPage() {
  const cloudProviders = ["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Vercel", "Netlify"]

  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to the cloud with minimal downtime.",
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automated, scalable infrastructure deployment using modern DevOps practices.",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Managed database services with automatic backups, scaling, and optimization.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance with industry standards.",
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Dynamic resource allocation that scales with your application demands.",
    },
    {
      icon: BarChart3,
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring, logging, and performance analytics for your cloud infrastructure.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/cloud-computing-infrastructure-with-servers-and-da.jpg')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Cloud Solutions & Infrastructure
            </h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Scale your business with robust cloud infrastructure. We provide end-to-end cloud solutions that are
              secure, scalable, and cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact">
                  Migrate to Cloud
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cloud Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cloud solutions tailored to your business requirements
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

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cloud Platforms We Work With</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expertise across all major cloud providers and platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cloudProviders.map((provider, index) => (
              <Badge key={index} className="text-sm px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                {provider}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.9), rgba(5, 150, 105, 0.9)), url('/cloud-computing-data-center-with-servers-and-netwo.jpg')`,
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your cloud strategy and build a scalable infrastructure for your business
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100">
            <Link href="/contact">
              Start Migration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
