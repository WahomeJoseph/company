"use client";
import { useState } from "react";
import { Check, Star, Code, Layout, ShoppingCart, Globe, Shield, Rocket, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Exchange rate: 1 USD = 150 Ksh (adjust as needed)
const exchangeRate = 150;

const plans = [
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
];

const faqs = [
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
    answer: "Absolutely! You can upgrade your package at any time. We’ll work with you to add new features and functionality seamlessly.",
  },
];

export default function Pricing() {
  const [currency, setCurrency] = useState<"ksh" | "usd">("ksh");

  return (
    <div className="pt-16 bg-gray-50 relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Website Development <span className="text-emerald-200">Pricing</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              One-time fee for your custom website. Transparent pricing, no hidden costs, and tailored solutions for your business.
            </p>
            <p className="text-lg text-emerald-100 mb-8">
              <Phone className="inline-block mr-2 h-5 w-5" />
              Contact us: <a href="tel:+254113730593" className="font-bold underline">+254 113 730 593</a>
            </p>
            <Tabs
              value={currency}
              onValueChange={(value) => setCurrency(value as "ksh" | "usd")}
              className="w-fit mx-auto mb-12"
            >
              <TabsList className="bg-white/10 border-0">
                <TabsTrigger
                  value="ksh"
                  className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 px-6 py-2"
                >
                  Ksh (Kenyan Shilling)
                </TabsTrigger>
                <TabsTrigger
                  value="usd"
                  className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 px-6 py-2"
                >
                  USD (US Dollar)
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card
                className={`relative h-full flex flex-col ${plan.popular ? "border-emerald-500 border-2 shadow-xl" : "shadow-lg"} hover:shadow-2xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center space-x-1 py-1 px-3 rounded-full">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2 text-lg">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {currency === "ksh" ? plan.price.ksh : plan.price.usd}
                    </span>
                    <p className="text-gray-600 text-sm mt-1">One-time fee</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="mr-3 mt-0.5">{feature.icon}</div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-3 text-lg ${
                      plan.popular
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-3">{faq.question}</CardTitle>
                    <CardDescription className="text-gray-700 leading-relaxed">{faq.answer}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button with Text */}
<div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
  <a
    href="https://wa.me/254113730593"
    target="_blank"
    rel="noopener noreferrer"
    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
  >
    <MessageCircle className="h-8 w-8 text-white" />
  </a>
  <span className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors text-sm font-medium">
    Chat on WhatsApp
  </span>
</div>

    </div>
  );
}
