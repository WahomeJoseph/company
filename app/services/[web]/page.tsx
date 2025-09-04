// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Database, Zap, Shield, Globe } from "lucide-react"
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
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/modern-web-development-coding-interface-with-react.jpg')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Web Development Services</h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Create powerful, scalable web applications that drive business growth. From concept to deployment, we
              deliver exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">View Examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services covering every aspect of your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-gray-200 bg-white">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
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

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern, proven technologies that ensure your application is built to last
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

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Design", description: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", description: "Building your application with best practices" },
              { step: "04", title: "Deployment", description: "Launching and maintaining your solution" },
            ].map((phase, index) => (
              <Card key={index} className="text-center border-gray-200 bg-white">
                <CardHeader>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{phase.step}</div>
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

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.9), rgba(5, 150, 105, 0.9)), url('/software-developers-coding-on-multiple-screens-wit.jpg')`,
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Web Application?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}
