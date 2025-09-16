"use client";

import Image from "next/image";
import { Users, Target, Award, Zap, Heart, Shield } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

import {
  Card,
  CardContent,
  CardDescription,
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
     github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    facebook: 'https://facebook.com/johndoe',
  },
  {
    name: "Joseph Wachira",
    role: "Co-Founder & CTO",
    bio: "Expert software architect and cloud solutions specialist. Passionate about building scalable systems and mentoring young developers.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    skills: ["System Architecture", "Full-Stack Development","Cloud Computing", "DevOps"],
     github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    facebook: 'https://facebook.com/johndoe',
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
    <div className=" bg-gray-50">
   {/* Hero Section */}
<section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-24 overflow-hidden">
  {/* Glowing Background Orbs */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-400 opacity-30 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-300 opacity-20 rounded-full blur-[100px] animate-pulse" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
        About{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-400 text-transparent bg-clip-text animate-gradient">
          TechSolutions
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4 animate-fade-in">
        Founded in 2024 with a mission to transform businesses through innovative technology
        solutions and exceptional service.
      </p>
    </motion.div>
  </div>
</section>


    {/* Mission & Vision */}
<section className="py-24 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
  {/* Decorative SVG */}
  <svg
    className="absolute top-0 right-0 w-48 h-48 text-emerald-200 opacity-30"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 100 100"
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="48" strokeDasharray="10 10" />
  </svg>

  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-md">
          Our <span className="text-emerald-600 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Mission</span>
        </h2>
        <p className="text-xl leading-relaxed text-gray-700 max-w-prose">
          To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe every organization deserves access to world-class software development and IT services that transform their operations and accelerate their success.
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 drop-shadow-sm">Our Vision</h3>
        <p className="text-lg leading-relaxed text-gray-700 max-w-prose">
          To become the leading technology partner for businesses across Africa and beyond, known for our innovative solutions, exceptional service, and unwavering commitment to client success.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-50 p-10 shadow-lg flex flex-col items-center justify-center border border-emerald-200 hover:shadow-2xl transition-shadow duration-500">
          <div className="text-center">
            <div className="text-7xl font-extrabold text-emerald-600 drop-shadow-lg select-none">
              2024
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-700 tracking-wide">
              Founded with Vision
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8 text-center">
              <div className="group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold text-emerald-700 group-hover:text-teal-600">
                  50+
                </div>
                <div className="mt-1 text-sm font-medium text-gray-600 group-hover:text-gray-800">
                  Projects
                </div>
              </div>
              <div className="group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold text-emerald-700 group-hover:text-teal-600">
                  100%
                </div>
                <div className="mt-1 text-sm font-medium text-gray-600 group-hover:text-gray-800">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


    {/* Values Section */}
<section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
        Our <span className="text-emerald-600 underline decoration-4 decoration-emerald-300">Values</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
        The principles that guide everything we do — shaping our culture, innovation, and impact.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="h-full p-8 rounded-3xl shadow-xl bg-white hover:bg-gradient-to-tr hover:from-emerald-50 hover:to-emerald-100 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <CardContent className="p-0 flex flex-col items-center text-center">
              <div className="text-emerald-600 mb-6 text-6xl drop-shadow-lg group-hover:scale-110 transform transition-transform duration-300">
                {value.icon}
              </div>
              <CardTitle className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                {value.title}
              </CardTitle>
              <CardDescription className="text-gray-600 leading-relaxed text-base max-w-xs">
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
<section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
  <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
        Our <span className="text-gradient bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Journey</span>
      </h2>
      <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
        Key milestones marking our company’s growth and success
      </p>
      <div className="mt-4 h-1 w-24 bg-emerald-400 rounded-full mx-auto shadow-lg"></div>
    </motion.div>

    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 to-emerald-600 rounded-full shadow-lg"></div>

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.25 }}
            viewport={{ once: true }}
            className="relative flex items-start"
          >
            {/* Circle marker */}
            <div className="absolute left-6 top-2 w-6 h-6 rounded-full border-4 border-white bg-emerald-500 shadow-2xl animate-pulse"></div>

            {/* Card */}
            <Card className="ml-20 flex-1 bg-white border border-emerald-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-400">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-semibold text-gray-900 tracking-wide">
                    {milestone.title}
                  </CardTitle>
                  <Badge className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md hover:bg-emerald-700 transition-colors">
                    {milestone.year}
                  </Badge>
                </div>
                <CardDescription className="text-gray-700 leading-relaxed text-lg">
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
<section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
        Meet Our{' '}
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
          Founders
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        The visionary leaders behind TechSolutions, blending years of expertise and a passion for innovation.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {founders.map((founder, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl hover:shadow-emerald-400/50 transition-shadow duration-500 transform hover:scale-[1.03]"
        >
          <Card className="h-full text-center rounded-3xl bg-transparent shadow-none">
            <CardContent className="p-10">
              
              {/* Social Icons at top */}
              <div className="flex justify-center space-x-6 mb-6 text-emerald-700 text-2xl">
                {founder.github && (
                  <a href={founder.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="hover:text-emerald-900 transition-colors duration-300" />
                  </a>
                )}
                {founder.linkedin && (
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="hover:text-emerald-900 transition-colors duration-300" />
                  </a>
                )}
                {founder.facebook && (
                  <a href={founder.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook className="hover:text-emerald-900 transition-colors duration-300" />
                  </a>
                )}
              </div>

              <div className="relative w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-emerald-300 shadow-lg">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <CardTitle className="text-3xl font-semibold text-gray-800 mb-2">
                {founder.name}
              </CardTitle>
              <p className="text-emerald-700 font-semibold text-lg mb-5 tracking-wide uppercase">
                {founder.role}
              </p>
              <CardDescription className="text-gray-700 leading-relaxed mb-8 max-w-prose mx-auto">
                {founder.bio}
              </CardDescription>
              <div className="flex flex-wrap justify-center gap-3">
                {founder.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 font-semibold px-4 py-1 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
                    style={{
                      animation: `glow 2.5s ease-in-out infinite alternate`,
                      animationDelay: `${skillIndex * 0.2}s`,
                    }}
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

  <style jsx>{`
    @keyframes glow {
      0% {
        box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
      }
      100% {
        box-shadow: 0 0 18px rgba(16, 185, 129, 0.8);
      }
    }
  `}</style>
</section>


    </div>
  );
}
