"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Search, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced projects data with sub-sections
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform for Global Retailers",
    description: {
      overview: "A modern e-commerce platform designed for global retailers, featuring advanced inventory management, real-time analytics, and multi-currency support.",
      motive: "To provide small and medium retailers with an affordable, scalable solution to compete with e-commerce giants.",
      features: [
        "Real-time inventory tracking",
        "Multi-currency and multi-language support",
        "AI-powered product recommendations",
        "Secure payment gateway integration",
      ],
      feedback: {
        text: "Client reported a 40% increase in sales within 3 months of launch due to improved user experience and analytics.",
        author: "Jane Doe, CEO of Retail Giants Inc.",
      },
    },
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Management System for Clinics",
    description: {
      overview: "A comprehensive healthcare platform for clinics, enabling patient management, appointment scheduling, and secure data handling.",
      motive: "To streamline clinic operations and reduce administrative overhead by 30%.",
      features: [
        "Automated appointment reminders via SMS/email",
        "Secure patient data storage (HIPAA compliant)",
        "Integration with lab systems for real-time results",
        "Customizable reporting for clinic performance",
      ],
      feedback: {
        text: "Clinics using the system reduced patient wait times by 25% and improved data accuracy significantly.",
        author: "Dr. John Smith, Clinic Director at HealthPlus",
      },
    },
    category: "web",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "FastAPI"],
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App with Biometric Security",
    description: {
      overview: "A secure mobile banking application with biometric authentication, real-time transaction tracking, and budgeting tools.",
      motive: "To provide users with a seamless, secure, and feature-rich banking experience on mobile devices.",
      features: [
        "Fingerprint and facial recognition login",
        "Instant transaction notifications",
        "Budgeting and expense tracking",
        "24/7 customer support chatbot",
      ],
      feedback: {
        text: "Users rated the app 4.8/5 on app stores, praising its security and ease of use. Mobile transactions increased by 60% in the first quarter.",
        author: "Alex Johnson, CTO of SecureBank",
      },
    },
    category: "mobile",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Firebase"],
    image: "https://images.pexels.com/photos/4386297/pexels-photo-4386297.jpeg",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Enterprise Cloud Migration Platform",
    description: {
      overview: "An enterprise-grade cloud migration platform with automated deployment, monitoring, and cost optimization tools.",
      motive: "To help businesses migrate to the cloud with minimal downtime and maximum cost efficiency.",
      features: [
        "Automated workload assessment",
        "Real-time migration progress tracking",
        "Post-migration performance monitoring",
        "Cost optimization recommendations",
      ],
      feedback: {
        text: "Clients achieved 50% faster migration and 20% cost savings in the first year. The platform exceeded our expectations in every way.",
        author: "Sarah Williams, IT Director at CloudFirst Solutions",
      },
    },
    category: "cloud",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus"],
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Restaurant Management App with POS Integration",
    description: {
      overview: "A complete restaurant management solution with POS integration, inventory tracking, and staff management features.",
      motive: "To simplify restaurant operations and improve customer service through technology.",
      features: [
        "Table and order management",
        "Real-time kitchen display system",
        "Inventory and supplier management",
        "Loyalty program and digital receipts",
      ],
      feedback: {
        text: "Restaurants using the app saw a 35% reduction in order errors and improved table turnover by 20%. Our staff loves the intuitive interface!",
        author: "Michael Chen, Owner of Urban Bites",
      },
    },
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Stripe", "Node.js", "Socket.io"],
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Real-Time Data Analytics Dashboard",
    description: {
      overview: "A real-time analytics dashboard for business intelligence, reporting, and data visualization.",
      motive: "To empower businesses with actionable insights from their data, enabling faster decision-making.",
      features: [
        "Customizable dashboards",
        "Real-time data synchronization",
        "Predictive analytics and forecasting",
        "Role-based access control",
      ],
      feedback: {
        text: "Businesses using the dashboard reduced reporting time by 60% and improved data-driven decisions. It's been a game-changer for our analytics team.",
        author: "Emily Davis, Data Analytics Manager at InsightCorp",
      },
    },
    category: "web",
    technologies: ["React", "D3.js", "Python", "Redis", "FastAPI"],
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    liveUrl: "#",
  },
];

// Filters
const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "cloud", label: "Cloud Solutions" },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const feedbackAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.5 } },
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.features.join(" ").toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
   <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-200 py-20">
  {/* Background Orbs */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-400 opacity-30 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400 opacity-20 rounded-full blur-[100px] animate-pulse" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-900 mb-3">
        Our{" "}
        <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 text-transparent bg-clip-text">
          Innovative Projects
        </span>
      </h1>
      <p className="text-xl max-w-3xl mx-auto text-emerald-800">
        Explore our collection of cutting-edge projects, designed to solve real-world challenges with technology.
      </p>
    </motion.div>
  </div>
</section>



      {/* Filter and Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-800 transition-all duration-300"
              />
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={item}
                    layout
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                  >
                    {/* Image Section: Fixed width and height */}
                    <div className="md:w-1/3 h-64 md:h-auto overflow-hidden flex items-center justify-center p-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    {/* Content Section */}
                    <div className="md:w-2/3 p-6 flex flex-col">
                      <div className="mb-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                          <Badge
                            className={`${
                              project.category === "web"
                                ? "bg-blue-100 text-blue-800"
                                : project.category === "mobile"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-4 mb-6">
                        <p className="text-gray-600 leading-relaxed">
                          <strong>Overview:</strong> {project.description.overview}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          <strong>Motive:</strong> {project.description.motive}
                        </p>
                        <div className="text-gray-600 leading-relaxed">
                          <strong>Key Features:</strong>
                          <ul className="list-disc pl-5 mt-2">
                            {project.description.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* Fancy Client Feedback Section */}
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={feedbackAnimation}
                        className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border-l-4 border-emerald-500 my-4"
                      >
                        <div className="flex items-start">
                          <Quote className="h-6 w-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-800 font-medium italic">
                              {project.description.feedback.text}
                            </p>
                            <p className="text-sm text-gray-600 mt-2 font-medium">
                              — {project.description.feedback.author}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto"
                      >
                        <div className="flex justify-end">
  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center">
    <ExternalLink className="h-4 w-4 mr-2" />
    Visit Live Project
  </Button>
</div>

                      </motion.a>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
