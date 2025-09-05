"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle,MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    content: "info@techsolutions.com",
    description: "Send us an email and we'll respond within 24 hours"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Monday to Friday from 8am to 5pm EST"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    content: "Nairobi, Kenya",
    description: "Come visit our office for a face-to-face consultation"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Start Your <span className="text-emerald-200">Project</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Get in touch with our team to discuss your next project.
            </p>
          </motion.div>
        </div>
      </section>

     

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-600">Get In Touch</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-2xl  font-bold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Needed *
                          </label>
                          <Select onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger className="focus:ring-emerald-500 focus:border-emerald-500">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="mobile-development">Mobile Development</SelectItem>
                              <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                              <SelectItem value="it-consulting">IT Consulting</SelectItem>
                              <SelectItem value="system-integration">System Integration</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Budget
                          </label>
                          <Select onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="focus:ring-emerald-500 focus:border-emerald-500">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">Under Ksh 10,000</SelectItem>
                              <SelectItem value="10k-20k">Ksh 10,000 - Ksh 20,000</SelectItem>
                              <SelectItem value="20k-50k">Ksh 20,000 - Ksh 50,000</SelectItem>
                              <SelectItem value="50k-plus">Ksh 50,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          className="focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Tell us more about your project, timeline, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <Card className="shadow-xl">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                      <p className="text-sm text-gray-500 mt-2">Interactive map coming soon</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Office Hours</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">What to Expect</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Initial Response</p>
                        <p className="text-sm text-gray-600">We&apos;ll respond to your inquiry within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Consultation Call</p>
                        <p className="text-sm text-gray-600">Free 30-minute consultation to discuss your project</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Project Proposal</p>
                        <p className="text-sm text-gray-600">Detailed proposal with timeline and pricing within 3-5 days</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
 

 {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-emerald-50">
                  <CardContent className="p-8">
                    <div className="text-emerald-600 mb-4 flex justify-center">
                      {info.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 text-gray-500">{info.title}</CardTitle>
                    <p className="text-emerald-600 font-semibold text-lg mb-2">{info.content}</p>
                    <CardDescription className="text-gray-600">
                      {info.description}
                    </CardDescription>
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