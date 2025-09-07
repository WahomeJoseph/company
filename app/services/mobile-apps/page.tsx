import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Tablet, Zap, Users, Store, Wifi, Code, Shield, BarChart, Clock, MessageSquare, CheckCircle, Award, Cloud, Database, Palette, Cpu, GitBranch, Settings } from "lucide-react"
import Link from "next/link"

export default function MobileAppsPage() {
  const platforms = ["iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin", "Java", "TypeScript", "Firebase", "GraphQL", "Redux", "Node.js"]

  const features = [
    {
      icon: Smartphone,
      title: "Native iOS & Android Development",
      description: "Platform-specific applications built with Swift, Objective-C, Kotlin, and Java that deliver superior performance and seamless integration with device hardware and operating systems.",
    },
    {
      icon: Tablet,
      title: "Cross-Platform Solutions",
      description: "Efficient React Native and Flutter applications that maintain native-like performance while reducing development time and costs with a single codebase for multiple platforms.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized memory usage, efficient battery consumption, smooth animations, and rapid load times that enhance user experience and retention.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive, accessible interfaces following Material Design and Human Interface Guidelines, with comprehensive user testing and iterative design improvements.",
    },
    {
      icon: Store,
      title: "App Store Deployment",
      description: "End-to-end support for Google Play and Apple App Store submission, including metadata optimization, screenshot preparation, and compliance with platform guidelines.",
    },
    {
      icon: Wifi,
      title: "Offline-First Capabilities",
      description: "Applications that function seamlessly without internet connectivity, with intelligent data synchronization, local storage, and background processing capabilities.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption, secure authentication, biometric integration, and compliance with GDPR, HIPAA, and other regulatory requirements.",
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Seamless connectivity with RESTful APIs, GraphQL, WebSockets, and real-time databases for dynamic, data-driven mobile experiences.",
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Comprehensive integration with analytics platforms to track user behavior, measure performance, and make data-driven decisions for continuous improvement.",
    },
  ]

  const developmentProcess = [
    {
      step: "Discovery & Strategy",
      description: "We analyze your requirements, target audience, and business objectives to create a comprehensive mobile strategy and project roadmap.",
      icon: MessageSquare,
    },
    {
      step: "UI/UX Design",
      description: "Our designers create wireframes, prototypes, and visual designs that prioritize user experience, accessibility, and brand consistency.",
      icon: Palette,
    },
    {
      step: "Development",
      description: "Agile development process with regular iterations, code reviews, and quality assurance to build robust, scalable mobile applications.",
      icon: Code,
    },
    {
      step: "Testing & QA",
      description: "Rigorous testing across multiple devices, screen sizes, and OS versions to ensure flawless performance and user experience.",
      icon: Settings,
    },
    {
      step: "Deployment",
      description: "Assistance with app store submission, metadata optimization, and launch preparation to ensure successful publication.",
      icon: Store,
    },
    {
      step: "Maintenance & Support",
      description: "Ongoing updates, feature enhancements, bug fixes, and performance monitoring to keep your app current and competitive.",
      icon: Clock,
    },
  ]

  const appTypes = [
    {
      type: "Consumer Applications",
      examples: ["E-commerce apps", "Social networks", "Entertainment platforms", "Health & fitness trackers"],
    },
    {
      type: "Business Applications",
      examples: ["Enterprise productivity tools", "CRM systems", "Field service management", "Inventory tracking"],
    },
    {
      type: "Specialized Solutions",
      examples: ["IoT-connected apps", "AR/VR experiences", "Payment processing", "Real-time collaboration tools"],
    },
  ]

  const technologies = [
    {
      category: "Frontend Frameworks",
      items: ["React Native", "Flutter", "SwiftUI", "Jetpack Compose"],
    },
    {
      category: "Backend Integration",
      items: ["REST APIs", "GraphQL", "WebSockets", "Firebase", "AWS Amplify"],
    },
    {
      category: "State Management",
      items: ["Redux", "MobX", "Provider", "Bloc"],
    },
    {
      category: "Testing & QA",
      items: ["Jest", "Detox", "Appium", "Espresso", "XCUITest"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-slate-900 to-emerald-900 text-white"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-600 text-white border-0 px-4 py-1.5 text-sm">
              Mobile Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Mobile App Development</h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty max-w-3xl mx-auto">
              Transform your ideas into powerful, engaging mobile applications that drive business growth. 
              We create native and cross-platform solutions that deliver exceptional user experiences across iOS and Android platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                <Link href="/contact">
                  Start Your Mobile Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">100+</div>
              <div className="text-sm text-emerald-600">Mobile Apps Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">4.8/5</div>
              <div className="text-sm text-emerald-600">App Store Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">98%</div>
              <div className="text-sm text-emerald-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">24/7</div>
              <div className="text-sm text-emerald-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Mobile Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end mobile solutions that encompass strategy, design, development, and ongoing optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-gray-200 bg-white group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                      <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </CardTitle>
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

      {/* Development Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured, transparent approach that ensures your mobile app project's success from concept to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center group hover:shadow-md transition-shadow">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-emerald-600 transition-colors">
                      <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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

      {/* App Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Mobile Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We develop a wide range of mobile solutions tailored to your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appTypes.map((appType, index) => (
              <Card key={index} className="text-center border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{appType.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    {appType.examples.map((example, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern, proven technologies that ensure your mobile application is built to last and perform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((techCategory, index) => (
              <Card key={index} className="border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{techCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techCategory.items.map((item, i) => (
                      <Badge key={i} variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platform Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive mobile development across all major platforms and devices
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <Badge key={index} className="text-sm px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your mobile app requirements and create a solution that drives engagement and business growth
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
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600"
            >
              <Link href="/get-quote">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
