'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Play, Users, Award, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Import hero images (replace with your actual image paths)
const heroBusinessImg = "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=900&auto=format&fit=crop&q=60"
const heroMobileImg = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=60"
const heroSeoImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=60"
const heroEcommerceImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=60"
const heroSuccessImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60"

const slides = [
  {
    title: "Grow Your Business Online in Kenya",
    subtitle: "Web Development • SEO • Digital Marketing",
    description:
      "Transform your Kenyan business with professional websites, mobile apps, and digital strategies that bring customers to your door. Built for local success.",
    image: heroBusinessImg,
  },
  {
    title: "Mobile Web Applications",
    subtitle: "Apps • M-Pesa Integration",
    description:
      "Custom mobile apps designed for Kenyan users. Integrated with custom payment methods and optimization for local network conditions.",
    image: heroMobileImg,
  },
  {
    title: "Rank Higher Locally with SEO",
    subtitle: "Local SEO • Content Marketing • Social Media",
    description:
      "Dominate local search results and reach more Kenyan customers. Our proven SEO strategies deliver 200% more website traffic within 90 days.",
    image: heroSeoImg,
  },
  {
    title: "E-commerce That Converts",
    subtitle: "Online Stores • Payment Gateways • Inventory Management",
    description:
      "Sell online with confidence. Complete e-commerce solutions with M-Pesa, card payments, and tools that help you manage orders effortlessly.",
    image: heroEcommerceImg,
  },
  {
    title: "Digital Success Stories",
    subtitle: "300% Growth • Real Results • Kenyan Businesses",
    description:
      "Join 100+ successful Kenyan businesses we've helped grow online. From restaurants to retail stores, see how digital transformation drives real results.",
    image: heroSuccessImg,
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isPlaying || !isMounted) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [isPlaying, isMounted])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  if (!isMounted) {
    return (
      <div className="relative h-[80vh] min-h-[600px] max-h-[800px] overflow-hidden rounded-2xl bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="h-16 bg-gray-300 rounded-lg mb-6 w-3/4 mx-auto"></div>
            <div className="h-6 bg-gray-300 rounded mb-4 w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded mb-10 w-2/3 mx-auto"></div>
            <div className="h-12 bg-gray-300 rounded-lg w-64 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full md:flex-row rounded-lg overflow-hidden mr-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : index === (currentSlide - 1 + slides.length) % slides.length
              ? "opacity-0 scale-110"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-[7000ms] ease-out"
              style={{
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
              }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            
            {/* Animated particles overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 flex h-full items-center justify-center px-4">
              <div className="text-center text-white max-w-5xl">
                <div 
                  className={`transform transition-all duration-1000 delay-200 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                    {slide.title}
                  </h1>
                </div>
                
                <div 
                  className={`transform transition-all duration-1000 delay-400 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <p className="text-xl md:text-2xl mb-4 text-emerald-300 font-semibold tracking-wide">
                    {slide.subtitle}
                  </p>
                </div>
                
                <div 
                  className={`transform transition-all duration-1000 delay-600 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-100">
                    {slide.description}
                  </p>
                </div>
                
                <div 
                  className={`transform transition-all duration-1000 delay-800 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                >
                </div>

                {/* Enhanced Trust Indicators */}
                <div 
                  className={`transform transition-all duration-1000 delay-1000 ${
                    index === currentSlide 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-8 opacity-0"
                  }`}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-20 group border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-20 group border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-6 right-6 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-20 group border border-white/20"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        <Play className={`h-5 w-5 group-hover:scale-110 transition-transform ${!isPlaying ? 'scale-100' : 'scale-0 absolute'}`} />
        <div className={`w-5 h-5 flex items-center justify-center transition-all ${isPlaying ? 'scale-100' : 'scale-0 absolute'}`}>
          <div className="w-1 h-3 bg-white rounded-sm mx-0.5"></div>
          <div className="w-1 h-3 bg-white rounded-sm mx-0.5"></div>
        </div>
      </button>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20 rounded-b-2xl overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 transition-all duration-500 ease-out relative"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
