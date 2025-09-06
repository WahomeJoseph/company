import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, FileCheck, Users } from "lucide-react"
import Link from "next/link"

export default function CybersecurityPage() {
  const solutions = [
    "Firewall Management",
    "Endpoint Protection",
    "SIEM",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Compliance Auditing",
  ]

  const services = [
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture and vulnerability identification.",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Multi-factor authentication and role-based access control implementation.",
    },
    {
      icon: Eye,
      title: "Threat Monitoring",
      description: "24/7 security monitoring and real-time threat detection and response.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid incident response and recovery procedures to minimize security breaches impact.",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Ensure compliance with industry standards like GDPR, HIPAA, and SOC 2.",
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Employee security awareness training and phishing simulation programs.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/cybersecurity-shield.png')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Cybersecurity Solutions</h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Protect your business from cyber threats with comprehensive security solutions. We safeguard your digital
              assets and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact">
                  Secure Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">Security Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Security Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from evolving threats
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

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Security Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced security tools and methodologies to keep your business protected
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {solutions.map((solution, index) => (
              <Badge key={index} className="text-sm px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                {solution}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Strengthen Your Security?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's assess your security needs and implement robust protection for your business
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100">
            <Link href="/contact">
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
