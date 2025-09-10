"use client";
import { useState } from "react";
import {
  Check,
  Star,
  Code,
  Layout,
  ShoppingCart,
  Globe,
  Shield,
  Rocket,
  MessageCircle,
  Phone,
  Smartphone,
  Cloud,
  Server,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useReducedMotion } from "framer-motion";
import ScrollDown from "@/components/scrollDown/ScrollDown";
import Link from "next/link";

// Exchange rate: 1 USD = 150 Ksh (adjust as needed)
const exchangeRate = 126;

// Pricing data for all services
const services = {
  "web-development": {
    name: "Web Development",
    plans: [
      {
        name: "Basic Website",
        description: "Perfect for small businesses, portfolios, or startups needing a simple online presence.",
        price: { ksh: "From 10,000", usd: `From $${Math.round(10000 / exchangeRate)}` },
        features: [
          { text: "Custom website design (up to 5 pages)", icon: <Layout className="h-5 w-5 text-emerald-500" /> },
          { text: "Mobile-friendly & responsive", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Basic SEO setup", icon: <Rocket className="h-5 w-5 text-emerald-500" /> },
          { text: "Contact form integration", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "3 months of free support", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Social media links integration", icon: <ShoppingCart className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Get Started",
        icon: <Layout className="h-8 w-8 text-white" />,
      },
      {
        name: "Professional Website",
        description: "Ideal for growing businesses needing advanced features and customization.",
        price: { ksh: "From 30,000", usd: `From $${Math.round(30000 / exchangeRate)}` },
        features: [
          { text: "Everything in Basic Website", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "E-commerce functionality (up to 20 products)", icon: <ShoppingCart className="h-5 w-5 text-emerald-500" /> },
          { text: "Custom database integration", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "API development (1 custom API)", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "6 months of free support", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Performance optimization", icon: <Rocket className="h-5 w-5 text-emerald-500" /> },
          { text: "Admin dashboard for content management", icon: <Layout className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: true,
        buttonText: "Start Free Consultation",
        icon: <ShoppingCart className="h-8 w-8 text-white" />,
      },
      {
        name: "Enterprise Website",
        description: "Comprehensive solution for large businesses or complex projects, including CTO consultation.",
        price: { ksh: "Negotiable", usd: "Negotiable" },
        features: [
          { text: "Everything in Professional Website", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "Custom mobile app development", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Cloud infrastructure setup", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "Advanced analytics & reporting", icon: <Rocket className="h-5 w-5 text-emerald-500" /> },
          { text: "12 months of dedicated support", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Dedicated account manager", icon: <Layout className="h-5 w-5 text-emerald-500" /> },
          { text: "Priority support & custom integrations", icon: <ShoppingCart className="h-5 w-5 text-emerald-500" /> },
          { text: "Scalable architecture for future growth", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "1-hour CTO consultation", icon: <MessageCircle className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Contact Sales",
        icon: <Rocket className="h-8 w-8 text-white" />,
      },
    ],
    faqs: [
      {
        question: "What does the website development process include?",
        answer: (
          <>
            Our process includes:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Initial consultation to understand your needs</li>
              <li>Design mockups and revisions</li>
              <li>Development and testing</li>
              <li>Deployment and launch</li>
              <li>Training and documentation</li>
              <li>Free support for the duration of your package</li>
            </ul>
          </>
        ),
      },
      {
        question: "How long does it take to develop a website?",
        answer: (
          <>
            Timelines vary based on complexity:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Basic Website:</strong> 2-4 weeks</li>
              <li><strong>Professional Website:</strong> 6-8 weeks</li>
              <li><strong>Enterprise Website:</strong> 10-16 weeks</li>
            </ul>
          </>
        ),
      },
      {
        question: "Do you offer ongoing maintenance after the project?",
        answer: "Yes! All packages include an initial support period. We also offer extended maintenance plans tailored to your needs.",
      },
      {
        question: "Can I upgrade my package later?",
        answer: "Absolutely! You can upgrade your package at any time. We'll work with you to add new features and functionality seamlessly.",
      },
    ],
  },
  "mobile-apps": {
    name: "Mobile Apps",
    plans: [
      {
        name: "Basic App",
        description: "Simple mobile app for startups or small businesses.",
        price: { ksh: "From 50,000", usd: `From $${Math.round(50000 / exchangeRate)}` },
        features: [
          { text: "Cross-platform (iOS & Android)", icon: <Smartphone className="h-5 w-5 text-emerald-500" /> },
          { text: "Basic UI/UX design", icon: <Layout className="h-5 w-5 text-emerald-500" /> },
          { text: "Up to 5 screens", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Basic backend integration", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "3 months of free support", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Get Started",
        icon: <Smartphone className="h-8 w-8 text-white" />,
      },
      {
        name: "Professional App",
        description: "Advanced mobile app with custom features and integrations.",
        price: { ksh: "From 150,000", usd: `From $${Math.round(150000 / exchangeRate)}` },
        features: [
          { text: "Everything in Basic App", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "Custom UI/UX design", icon: <Layout className="h-5 w-5 text-emerald-500" /> },
          { text: "Up to 20 screens", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Advanced backend integration", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "Payment gateway integration", icon: <ShoppingCart className="h-5 w-5 text-emerald-500" /> },
          { text: "6 months of free support", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: true,
        buttonText: "Start Free Consultation",
        icon: <Smartphone className="h-8 w-8 text-white" />,
      },
      {
        name: "Enterprise App",
        description: "Full-scale mobile app solution with advanced features and dedicated support.",
        price: { ksh: "Negotiable", usd: "Negotiable" },
        features: [
          { text: "Everything in Professional App", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "Unlimited screens", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Custom animations & interactions", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "Dedicated backend infrastructure", icon: <Server className="h-5 w-5 text-emerald-500" /> },
          { text: "12 months of dedicated support", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Priority feature updates", icon: <Rocket className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Contact Sales",
        icon: <Smartphone className="h-8 w-8 text-white" />,
      },
    ],
    faqs: [
      {
        question: "What platforms do you develop for?",
        answer: "We develop cross-platform apps for both iOS and Android using modern frameworks like React Native and Flutter.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer: "Timelines vary based on complexity: Basic App (6-8 weeks), Professional App (10-12 weeks), Enterprise App (4-6 months).",
      },
      {
        question: "Do you provide app maintenance?",
        answer: "Yes! All packages include an initial support period. We also offer extended maintenance plans.",
      },
      {
        question: "Can you help publish the app to app stores?",
        answer: "Absolutely! We provide full support for publishing to both the Apple App Store and Google Play Store.",
      },
    ],
  },
  "cloud-solutions": {
    name: "Cloud Solutions",
    plans: [
      {
        name: "Basic Cloud Setup",
        description: "Simple cloud hosting and setup for small businesses.",
        price: { ksh: "From 20,000", usd: `From $${Math.round(20000 / exchangeRate)}` },
        features: [
          { text: "Cloud hosting setup", icon: <Cloud className="h-5 w-5 text-emerald-500" /> },
          { text: "Basic security configuration", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Up to 10GB storage", icon: <Server className="h-5 w-5 text-emerald-500" /> },
          { text: "Basic backup solution", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "3 months of free support", icon: <MessageCircle className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Get Started",
        icon: <Cloud className="h-8 w-8 text-white" />,
      },
      {
        name: "Professional Cloud",
        description: "Advanced cloud solutions for growing businesses.",
        price: { ksh: "From 60,000", usd: `From $${Math.round(60000 / exchangeRate)}` },
        features: [
          { text: "Everything in Basic Cloud Setup", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "Auto-scaling infrastructure", icon: <Server className="h-5 w-5 text-emerald-500" /> },
          { text: "Up to 100GB storage", icon: <Cloud className="h-5 w-5 text-emerald-500" /> },
          { text: "Advanced security & compliance", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Automated daily backups", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "6 months of free support", icon: <MessageCircle className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: true,
        buttonText: "Start Free Consultation",
        icon: <Cloud className="h-8 w-8 text-white" />,
      },
      {
        name: "Enterprise Cloud",
        description: "Full-scale cloud infrastructure with dedicated support and custom solutions.",
        price: { ksh: "Negotiable", usd: "Negotiable" },
        features: [
          { text: "Everything in Professional Cloud", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "Custom cloud architecture", icon: <Server className="h-5 w-5 text-emerald-500" /> },
          { text: "Unlimited storage & bandwidth", icon: <Cloud className="h-5 w-5 text-emerald-500" /> },
          { text: "24/7 monitoring & support", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Disaster recovery planning", icon: <Code className="h-5 w-5 text-emerald-500" /> },
          { text: "Dedicated cloud engineer", icon: <MessageCircle className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Contact Sales",
        icon: <Cloud className="h-8 w-8 text-white" />,
      },
    ],
    faqs: [
      {
        question: "What cloud platforms do you support?",
        answer: "We support AWS, Google Cloud, Azure, and DigitalOcean. We can also work with your preferred platform.",
      },
      {
        question: "Is my data secure in the cloud?",
        answer: "Yes! We implement industry-standard security measures, including encryption, firewalls, and regular security audits.",
      },
      {
        question: "Can you migrate our existing infrastructure to the cloud?",
        answer: "Absolutely! We provide seamless migration services with minimal downtime.",
      },
      {
        question: "Do you offer cloud cost optimization?",
        answer: "Yes, we analyze your cloud usage and optimize costs to ensure you get the best value.",
      },
    ],
  },
  "network-infrastructure": {
    name: "Network Infrastructure",
    plans: [
      {
        name: "Basic Network Setup",
        description: "Simple network setup for small offices or startups.",
        price: { ksh: "From 30,000", usd: `From $${Math.round(30000 / exchangeRate)}` },
        features: [
          { text: "Local area network (LAN) setup", icon: <Server className="h-5 w-5 text-emerald-500" /> },
          { text: "Basic firewall configuration", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Wi-Fi setup & optimization", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Up to 5 devices", icon: <Cpu className="h-5 w-5 text-emerald-500" /> },
          { text: "3 months of free support", icon: <MessageCircle className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Get Started",
        icon: <Server className="h-8 w-8 text-white" />,
      },
      {
        name: "Professional Network",
        description: "Advanced network infrastructure for medium-sized businesses.",
        price: { ksh: "From 100,000", usd: `From $${Math.round(100000 / exchangeRate)}` },
        features: [
          { text: "Everything in Basic Network Setup", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "VPN & remote access setup", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Advanced firewall & security", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Up to 50 devices", icon: <Cpu className="h-5 w-5 text-emerald-500" /> },
          { text: "Network monitoring tools", icon: <Server className="h-5 w-5 text-emerald-500" /> },
          { text: "6 months of free support", icon: <MessageCircle className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: true,
        buttonText: "Start Free Consultation",
        icon: <Server className="h-8 w-8 text-white" />,
      },
      {
        name: "Enterprise Network",
        description: "Full-scale network infrastructure with redundancy and dedicated support.",
        price: { ksh: "Negotiable", usd: "Negotiable" },
        features: [
          { text: "Everything in Professional Network", icon: <Check className="h-5 w-5 text-emerald-500" /> },
          { text: "Redundant network architecture", icon: <Server className="h-5 w-5 text-emerald-500" /> },
          { text: "Unlimited devices", icon: <Cpu className="h-5 w-5 text-emerald-500" /> },
          { text: "24/7 network monitoring", icon: <Globe className="h-5 w-5 text-emerald-500" /> },
          { text: "Disaster recovery planning", icon: <Shield className="h-5 w-5 text-emerald-500" /> },
          { text: "Dedicated network engineer", icon: <MessageCircle className="h-5 w-5 text-emerald-500" /> },
        ],
        popular: false,
        buttonText: "Contact Sales",
        icon: <Server className="h-8 w-8 text-white" />,
      },
    ],
    faqs: [
      {
        question: "What does network infrastructure setup include?",
        answer: "Our setup includes hardware installation, network configuration, security setup, and performance optimization.",
      },
      {
        question: "Do you provide network maintenance?",
        answer: "Yes! All packages include an initial support period. We also offer extended maintenance plans.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely! We ensure seamless integration with your existing infrastructure.",
      },
      {
        question: "Do you offer 24/7 support for network issues?",
        answer: "Yes, our Enterprise Network package includes 24/7 support.",
      },
    ],
  },
};


export default function Pricing() {
  const [currency, setCurrency] = useState<"ksh" | "usd">("ksh");
  const [selectedService] = useState<keyof typeof services>("web-development");
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-gray-50 relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              {services[selectedService].name}{" "}
              <span className="text-emerald-600">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
              One-time fee for your custom {services[selectedService].name.toLowerCase()}. 
              Transparent pricing, no hidden costs, and tailored solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 text-base md:text-lg text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span>Contact us:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <a
                  href="tel:+254113730593"
                  className="text-emerald-700 font-medium hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  +254 113 730 593
                </a>
                <span className="text-gray-500">or</span>
                <a
                  href="tel:+254795969757"
                  className="text-emerald-700 font-medium hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 py-1"
                >
                  +254 795 969 757
                </a>
              </div>
            </div>

            {/* Currency Toggle */}
            <div className="mb-5">
              <Tabs
                value={currency}
                onValueChange={(value) => setCurrency(value as "ksh" | "usd")}
                className="w-fit mx-auto"
              >
                <TabsList 
                  className="backdrop-blur-md bg-white/70 border border-emerald-100 shadow-sm rounded-lg p-1"
                  role="tablist"
                  aria-label="Select currency"
                >
                  <TabsTrigger
                    value="ksh"
                    role="tab"
                    aria-selected={currency === "ksh"}
                    className="px-6 py-3 rounded-md data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-700 hover:bg-emerald-50 transition-all text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    KSH
                  </TabsTrigger>
                  <TabsTrigger
                    value="usd"
                    role="tab"
                    aria-selected={currency === "usd"}
                    className="px-6 py-3 rounded-md data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-gray-700 hover:bg-emerald-50 transition-all text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    USD
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </motion.div>
        </div>
        <ScrollDown />
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services[selectedService].plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.6, 
                delay: shouldReduceMotion ? 0 : index * 0.1 
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
              className="h-full"
            >
              <Card
                className={`relative h-full flex flex-col transition-all duration-300 ${
                  plan.popular 
                    ? "border-2 border-emerald-500 shadow-xl" 
                    : "border border-gray-200 shadow-md hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge 
                      className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center space-x-1 py-1.5 px-4 rounded-full shadow-md"
                      aria-label="Most Popular Plan"
                    >
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-semibold">Most Popular</span>
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6 flex flex-col items-center pt-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center mb-4 shadow-md">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2 text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {currency === "ksh" ? plan.price.ksh : plan.price.usd}
                    </span>
                    <p className="text-gray-600 text-sm mt-1">One-time fee</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-3 mt-0.5 flex-shrink-0" aria-hidden="true">
                          {feature.icon}
                        </div>
                        <span className="text-gray-700 text-sm md:text-base">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href='/contact'>
                  <Button
                    className={`w-full py-3 text-base font-medium ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-50"
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our {services[selectedService]?.name.toLowerCase()} services.
            </p>
          </motion.div>
          <div className="space-y-4">
            {services[selectedService].faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.4, 
                  delay: shouldReduceMotion ? 0 : index * 0.1 
                }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              >
                <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <div className="text-gray-700 leading-relaxed prose prose-emerald max-w-none">
                      {faq.answer}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
