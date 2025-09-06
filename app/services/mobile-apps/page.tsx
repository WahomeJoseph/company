import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Tablet, Zap, Users, Store, Wifi } from "lucide-react"
import Link from "next/link"

export default function MobileAppsPage() {
  const platforms = ["iOS", "Android", "React Native", "Flutter", "Swift", "Kotlin"]

  const features = [
    {
      icon: Smartphone,
      title: "Native Development",
      description: "Platform-specific apps that leverage the full potential of iOS and Android devices.",
    },
    {
      icon: Tablet,
      title: "Cross-Platform",
      description: "Single codebase solutions that work seamlessly across multiple platforms.",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Fast, responsive apps with smooth animations and efficient resource usage.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed following platform-specific design guidelines.",
    },
    {
      icon: Store,
      title: "App Store Optimization",
      description: "Complete support for app store submission and optimization strategies.",
    },
    {
      icon: Wifi,
      title: "Offline Capabilities",
      description: "Apps that work seamlessly even without internet connectivity.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/mobile-app-development-with-smartphone-screens-sho.jpg')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Mobile App Development</h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Transform your ideas into powerful mobile applications. We create native and cross-platform apps that
              engage users and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact">
                  Start Your App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">View Our Apps</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mobile App Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive mobile development services for all your app needs
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

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Platforms & Technologies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with the latest mobile development technologies and frameworks
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform, index) => (
              <Badge key={index} className="text-sm px-4 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                {platform}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Launch Your Mobile App?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's bring your mobile app idea to life with our expert development team
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
