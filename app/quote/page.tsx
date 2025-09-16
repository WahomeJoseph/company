"use client";
import { useState } from "react";
import Image from "next/image";
import { db } from "@/lib/Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { CheckCircle, Send, Phone, Mail, MapPin } from "lucide-react";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "quotes"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        details: "",
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
      alert("There was an error sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-10 mt-20 text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-xl border border-emerald-100">
        <Confetti />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
            Thank You!
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto">
            We’ve received your request and will get back to you shortly with a personalized quote.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 mt-10 md:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-xl overflow-hidden border border-emerald-50"
      >
        {/* Left side: Form */}
        <div className="p-6 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 text-center md:text-left"
          >
            Get a <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">Quote</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 text-gray-600 text-center md:text-left max-w-md"
          >
            Not sure what a quote is? It’s a personalized estimate of the cost and timeline for your project. Submit your details below, and we’ll provide a tailored plan that fits your needs.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6 max-w-md mx-auto md:mx-0"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 peer pt-5"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
              >
                Full Name *
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 peer pt-5"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
              >
                Email *
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 peer pt-5"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
              >
                Phone Number
              </label>
            </div>
            <div className="relative">
              <textarea
                id="details"
                name="details"
                required
                value={formData.details}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 peer pt-5"
                placeholder=" "
              />
              <label
                htmlFor="details"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
              >
                Project Details *
              </label>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold py-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/50 flex items-center justify-center"
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
                  Submit Request
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden md:block relative rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Professional consultation"
            width={600}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tailored solutions for your needs</li>
              <li>Transparent pricing and timelines</li>
              <li>Expert team with years of experience</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
