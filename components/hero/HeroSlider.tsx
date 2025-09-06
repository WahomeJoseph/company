"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "Transform Your Business with AI",
    subtitle: "Cutting-edge artificial intelligence solutions",
    description:
      "Harness the power of machine learning and AI to automate processes, gain insights, and drive innovation in your organization.",
    cta: "Explore AI Solutions",
    href: "/services/ai-ml",
    image: "/artificial-intelligence-neural-network-with-data-p.jpg",
  },
  {
    title: "Secure Cloud Infrastructure",
    subtitle: "Scalable and reliable cloud solutions",
    description:
      "Migrate to the cloud with confidence. Our expert team ensures seamless transitions and robust security for your critical applications.",
    cta: "Learn About Cloud",
    href: "/services/cloud-solutions",
    image: "/cloud-computing-infrastructure-with-servers-and-da.jpg",
  },
  {
    title: "Custom Software Development",
    subtitle: "Tailored solutions for your unique needs",
    description:
      "From web applications to mobile apps, we create custom software that perfectly fits your business requirements and scales with your growth.",
    cta: "Start Your Project",
    href: "/services/web-development",
    image: "/software-developers-coding-on-multiple-screens-wit.jpg",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[600px] overflow-hidden rounded-lg bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance text-white">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-2 text-emerald-300 font-medium">{slide.subtitle}</p>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty leading-relaxed text-gray-100">
                  {slide.description}
                </p>
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8">
                  <Link href={slide.href}>
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-emerald-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
