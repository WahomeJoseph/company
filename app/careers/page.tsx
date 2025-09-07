"use client";

import { useState } from "react";
import { MapPin, Clock, DollarSign, Users, Code, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description: "We're looking for a senior full stack developer to join our growing team. You'll work on cutting-edge projects using modern technologies.",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Experience with cloud platforms (AWS, Azure)",
      "Strong knowledge of databases (SQL and NoSQL)",
      "Experience with microservices architecture",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Develop and maintain full-stack applications",
      "Lead technical architecture decisions",
      "Mentor junior developers",
      "Collaborate with cross-functional teams",
      "Ensure code quality and best practices"
    ]
  },
  {
    id: 2,
    title: "Mobile App Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    description: "Join our mobile team to build innovative mobile applications for iOS and Android platforms using React Native and Flutter.",
    requirements: [
      "3+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Experience with native iOS/Android development",
      "Knowledge of mobile UI/UX best practices",
      "Experience with app store deployment"
    ],
    responsibilities: [
      "Develop cross-platform mobile applications",
      "Optimize app performance and user experience",
      "Collaborate with design team on UI implementation",
      "Integrate with backend APIs",
      "Maintain and update existing mobile apps"
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    description: "We need a DevOps engineer to help us scale our infrastructure and improve our deployment processes.",
    requirements: [
      "Experience with Docker and Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Proficiency in cloud platforms",
      "Scripting skills (Python, Bash)",
      "Monitoring and logging experience"
    ],
    responsibilities: [
      "Manage cloud infrastructure",
      "Implement CI/CD pipelines",
      "Monitor system performance",
      "Automate deployment processes",
      "Ensure system security and compliance"
    ]
  },
  {
    id: 4,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-time",
    salary: "$30,000 - $45,000",
    description: "Create beautiful and intuitive user interfaces for web and mobile applications with a focus on user experience.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Understanding of web and mobile design patterns",
      "Experience with design systems",
      "Strong portfolio showcasing design work"
    ],
    responsibilities: [
      "Design user interfaces for web and mobile",
      "Create wireframes and prototypes",
      "Conduct user research and testing",
      "Maintain design systems",
      "Collaborate with development team"
    ]
  }
];

const benefits = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Growth Opportunities",
    description: "Continuous learning and career development programs"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Culture",
    description: "Collaborative and inclusive work environment"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Cutting-edge Tech",
    description: "Work with the latest technologies and tools"
  }
];

export default function Careers() {
  const handleApply = (jobId: number) => {
    // In a real application, this would navigate to an application form
    alert(`Application form for job ${jobId} would open here`);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-emerald-200">Team</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Build the future of technology with us. We&apos;re looking for passionate individuals who want to make a difference.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With <span className="text-emerald-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive and grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 bg-gray-50 hover:bg-emerald-50 transition-colors duration-300 border-0">
                  <CardContent className="p-0">
                    <div className="text-emerald-600 mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl mb-3">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open <span className="text-emerald-600">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-2xl">
                        {job.title}
                      </CardTitle>
                      <Badge variant={job.type === "Full-time" ? "default" : "secondary"} className="bg-emerald-100 text-emerald-700">
                        {job.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        <span>{job.salary}</span>
                      </div>
                    </div>

                    <CardDescription className="text-gray-700 leading-relaxed">
                      {job.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex space-x-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-3xl">{job.title}</DialogTitle>
                            <DialogDescription>
                              <div className="space-y-6 mt-6">
                                <div>
                                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Job Description</h3>
                                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                                </div>

                                <div>
                                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
                                  <ul className="space-y-2">
                                    {job.requirements.map((req, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="text-emerald-600 mr-2">•</span>
                                        <span className="text-gray-700">{req}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsibilities</h3>
                                  <ul className="space-y-2">
                                    {job.responsibilities.map((resp, index) => (
                                      <li key={index} className="flex items-start">
                                        <span className="text-emerald-600 mr-2">•</span>
                                        <span className="text-gray-700">{resp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="pt-6 border-t">
                                  <Button
                                    onClick={() => handleApply(job.id)}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                  >
                                    Apply for this Position
                                  </Button>
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <Button
                        onClick={() => handleApply(job.id)}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      >
                        Apply Now
                      </Button>
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