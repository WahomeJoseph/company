/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { db } from "@/lib/Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    content: "info@techsolutions.com",
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    content: "+254 700 000000",
    description: "Monday to Friday from 8am to 5pm EAT",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    content: "Nairobi, Kenya",
    description: "Come visit our office for a face-to-face consultation",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      console.log("Document written with ID: ", docRef.id);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-200 py-40 sm:py-48">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-400 opacity-30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400 opacity-20 rounded-full blur-[100px] animate-pulse" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-emerald-900"
          >
            Let’s Build Your <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 text-transparent bg-clip-text"
            >
              Next Big Idea
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-emerald-800 max-w-3xl mx-auto"
          >
            At Tech Solutions, we specialize in building robust, scalable, and
            visually stunning digital products. Whether you’re a startup or an
            enterprise, we turn your ideas into real-world impact through
            cutting-edge technology and strategic design.
          </motion.p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-emerald-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-600 flex items-center gap-2">
                    Get In Touch{" "}
                    <MessageCircle className="text-emerald-500 h-6 w-6" />
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">                    Fill out the form below and we'll get back to you as soon as
                    possible.

                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <Confetti />
                      <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div className="relative">
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            required
                            className="rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 w-full h-12 pt-4 pb-1 text-black"
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                          >
                            Full Name *
                          </label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                            className="rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 w-full h-12 pt-4 pb-1 text-black"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                          >
                            Email Address *
                          </label>
                        </div>
                      </div>

                      {/* Company Name */}
                      <div className="relative">
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 w-full h-12 pt-4 pb-1 text-black"
                        />
                        <label
                          htmlFor="company"
                          className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                        >
                          Company Name
                        </label>
                      </div>

                      {/* Service and Budget */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-gray-700 mb-2 text-black"
                          >
                            Service Needed *
                          </label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("service", value)
                            }
                          >
                            <SelectTrigger className="focus:ring-emerald-500 focus:border-emerald-500 w-full h-12 text-black">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web-development">
                                Web Development
                              </SelectItem>
                              <SelectItem value="mobile-development">
                                Mobile Development
                              </SelectItem>
                              <SelectItem value="cloud-solutions">
                                Cloud Solutions
                              </SelectItem>
                              <SelectItem value="it-consulting">
                                IT Consulting
                              </SelectItem>
                              <SelectItem value="system-integration">
                                System Integration
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Project Budget
                          </label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("budget", value)
                            }
                          >
                            <SelectTrigger className="focus:ring-emerald-500 focus:border-emerald-500 w-full h-12 text-black">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">
                                Under Ksh 10,000
                              </SelectItem>
                              <SelectItem value="10k-20k">
                                Ksh 10,000 - Ksh 20,000
                              </SelectItem>
                              <SelectItem value="20k-50k">
                                Ksh 20,000 - Ksh 50,000
                              </SelectItem>
                              <SelectItem value="50k-plus">
                                Ksh 50,000+
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="relative">
                        <Textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          required
                          className="rounded-md border border-gray-300 focus:ring-2 focus:ring-emerald-500 w-full pt-4 pb-1"
                        />
                        <label
                          htmlFor="message"
                          className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                        >
                          Project Details *
                        </label>
                      </div>

                      {/* Submit Button */}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
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
              <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Our Location
                      </h3>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Office Hours
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    What to Expect
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Initial Response
                        </p>
                        <p className="text-sm text-gray-600">
                          We&apos;ll respond to your inquiry within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Consultation Call
                        </p>
                        <p className="text-sm text-gray-600">
                          Free 30-minute consultation to discuss your project
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Project Proposal
                        </p>
                        <p className="text-sm text-gray-600">
                          Detailed proposal with timeline and pricing within 3-5
                          days
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

   
    </div>
  );
}
