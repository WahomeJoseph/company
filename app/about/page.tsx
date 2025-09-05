"use client";

import Image from "next/image";
import { Users, Target, Award, Zap, Heart, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
const JothamImage = "/jotham.png";
const founders = [
  {
    name: "Jotham Micheni",
    role: "Co-Founder & CEO",
    bio: "Passionate technologist with over 8 years of experience in software development and business strategy. Led multiple successful digital transformation projects.",
    image: JothamImage,
    skills: ["Strategic Planning", "Full-Stack Development", "Team Leadership"],
  },
  {
    name: "Joseph Wachira",
    role: "Co-Founder & CTO",
    bio: "Expert software architect and cloud solutions specialist. Passionate about building scalable systems and mentoring young developers.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    skills: ["System Architecture", "Full-Stack Development","Cloud Computing", "DevOps"],
  },
];

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Client-Centric",
    description:
      "We prioritize our clients' success and build long-lasting partnerships",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description:
      "We maintain the highest standards in every project we undertake",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Efficiency",
    description:
      "We deliver projects on time and within budget without compromising quality",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Integrity",
    description:
      "We believe in honest communication and transparent business practices",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Security",
    description: "We prioritize data security and privacy in all our solutions",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description:
      "TechSolutions was established by Jotham Micheni and Joseph Wachira with a vision to transform digital experiences.",
  },
  {
    year: "2024",
    title: "First 10 Clients",
    description:
      "Successfully delivered projects for our first 10 clients, establishing our reputation in the market.",
  },
  {
    year: "2024",
    title: "Team Expansion",
    description:
      "Grew our team to include specialized developers, designers, and project managers.",
  },
  {
    year: "2025",
    title: "50+ Projects",
    description:
      "Reached the milestone of 50+ completed projects with 100% client satisfaction rate.",
  },
];

export default function About() {
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
              About <span className="text-emerald-200">TechSolutions</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Founded in 2024 with a mission to transform businesses through
              innovative technology solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-emerald-600">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To empower businesses with cutting-edge technology solutions
                that drive growth, efficiency, and innovation. We believe that
                every organization deserves access to world-class software
                development and IT services that transform their operations and
                accelerate their success.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the leading technology partner for businesses across
                Africa and beyond, known for our innovative solutions,
                exceptional service, and commitment to client success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-600 mb-4">
                    2024
                  </div>
                  <p className="text-xl text-gray-700">Founded with Vision</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">
                        100%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-emerald-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="text-emerald-600 mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl mb-3 text-black">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our companys growth
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-6 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                  <Card className="ml-16 flex-1 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <CardTitle className="text-xl text-black">
                          {milestone.title}
                        </CardTitle>
                        <Badge className="bg-emerald-600 hover:bg-emerald-700">
                          {milestone.year}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
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
              Meet Our <span className="text-emerald-600">Founders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries behind TechSolutions, bringing together years of
              experience and passion for technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2 text-gray-500">
                      {founder.name}
                    </CardTitle>
                    <p className="text-emerald-600 font-semibold mb-4">
                      {founder.role}
                    </p>
                    <CardDescription className="text-gray-700 leading-relaxed mb-6">
                      {founder.bio}
                    </CardDescription>
                    <div className="flex flex-wrap justify-center gap-2">
                      {founder.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-emerald-50 text-emerald-700"
                        >
                          {skill}
                        </Badge>
                      ))}
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
