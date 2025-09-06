import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, BarChart3, Bot, Zap, Database, Target } from "lucide-react"
import Link from "next/link"

export default function AIMachineLearningPage() {
  const technologies = [
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    "Hugging Face",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "AWS SageMaker",
  ]

  const services = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML models trained on your data to solve specific business problems and automate processes.",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics and forecasting to help you make data-driven business decisions.",
    },
    {
      icon: Bot,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational AI systems to enhance customer service and user experience.",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "AI-powered automation solutions to streamline workflows and increase operational efficiency.",
    },
    {
      icon: Database,
      title: "Data Processing & ETL",
      description: "Automated data processing pipelines and extract-transform-load operations using AI.",
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Image and video analysis solutions for quality control, security, and content moderation.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/artificial-intelligence-neural-network-with-data-p.jpg')`,
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              AI & Machine Learning Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Harness the power of artificial intelligence to transform your business. We build intelligent solutions
              that learn, adapt, and deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact">
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/portfolio">View AI Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI & ML Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive artificial intelligence and machine learning solutions for modern businesses
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Technologies & Frameworks</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge AI and machine learning technologies and frameworks
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
          backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.9), rgba(5, 150, 105, 0.9)), url('/modern-ai-technology-dashboard-with-neural-network.jpg')`,
        }}
      >
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Embrace AI?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how artificial intelligence can revolutionize your business operations and growth
          </p>
          <Button asChild size="lg" className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100">
            <Link href="/contact">
              Start AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
