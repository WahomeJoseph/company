"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced inventory management and real-time analytics",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management and appointment scheduling",
    category: "web",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transactions",
    category: "mobile",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "https://images.pexels.com/photos/4386297/pexels-photo-4386297.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Cloud Migration Platform",
    description: "Enterprise cloud migration solution with automated deployment and monitoring",
    category: "cloud",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Restaurant Management App",
    description: "Complete restaurant management solution with POS integration and inventory tracking",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Stripe", "Node.js"],
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Data Analytics Dashboard",
    description: "Real-time analytics dashboard for business intelligence and reporting",
    category: "web",
    technologies: ["React", "D3.js", "Python", "Redis"],
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "cloud", label: "Cloud Solutions" }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-emerald-100">Complete Work</span>
            </h1>
            <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
              Explore our collection of innovative projects that showcase our expertise in software development and IT solutions
            </p>
          </motion.div>
        </div>
        </section>
      {/* Filter and Search */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 text-gray-800"
              />
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`rounded-full ${activeFilter === filter.id ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "text-gray-700 border-gray-300 hover:bg-gray-50"}`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white w-full"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Live Page
                        </a>
                      </Button>
                      
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
