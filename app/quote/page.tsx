"use client";

import { useState } from "react";
import Image from "next/image";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to API
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-10 mt-20 text-center bg-emerald-50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-emerald-700">Thank you!</h1>
        <p className="text-lg text-emerald-700">
          We have received your request and will get back to you shortly with a personalized quote.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-lg shadow-lg">
      
      {/* Left side: Form */}
      <div>
        <h1 className="text-5xl font-extrabold mb-8 text-gray-800 text-center md:text-left">
          Get a <span className="text-emerald-600">Quote</span>
        </h1>
        <p className="mb-8 text-gray-600 text-center md:text-left max-w-md">
          Not sure what a quote is? It&apos;s a personalized estimate of the cost and timeline for your project.
          Submit your details below and we&apos;ll provide a tailored plan that fits your needs.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto md:mx-0">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="+123 456 7890"
            />
          </div>

          <div>
            <label htmlFor="details" className="block mb-2 font-semibold text-gray-700">
              Project Details
            </label>
            <textarea
              id="details"
              name="details"
              required
              value={formData.details}
              onChange={handleChange}
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Describe your project or requirements"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 rounded-lg transition-shadow shadow-lg hover:shadow-emerald-500/50"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="relative hidden md:block rounded-lg overflow-hidden shadow-xl">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
          alt="Technology Consultation"
          width={600}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  );
}
