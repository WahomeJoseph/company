"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
    author: "Jotham Micheni",
    date: "2024-12-15",
    category: "Web Development",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    readTime: "5 min read",
    slug: "future-web-development-trends-2025"
  },
  {
    id: 2,
    title: "Building Scalable Cloud Applications: Best Practices",
    excerpt: "Learn essential strategies for designing and deploying scalable applications in the cloud.",
    author: "Joseph Wachira",
    date: "2024-12-10",
    category: "Cloud Computing",
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
    readTime: "8 min read",
    slug: "scalable-cloud-applications-best-practices"
  },
  {
    id: 3,
    title: "Mobile-First Design: Creating Better User Experiences",
    excerpt: "Discover how mobile-first design principles can improve your application's usability and performance.",
    author: "Jotham Micheni",
    date: "2024-12-05",
    category: "UI/UX Design",
    image: "https://images.pexels.com/photos/4386297/pexels-photo-4386297.jpeg",
    readTime: "6 min read",
    slug: "mobile-first-design-user-experience"
  },
  {
    id: 4,
    title: "Cybersecurity in Software Development: Essential Guidelines",
    excerpt: "Understand the critical security practices every developer should implement in their projects.",
    author: "Joseph Wachira",
    date: "2024-11-28",
    category: "Security",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    readTime: "7 min read",
    slug: "cybersecurity-software-development-guidelines"
  },
  {
    id: 5,
    title: "API Development: From REST to GraphQL",
    excerpt: "Compare different API development approaches and learn when to use each one for maximum efficiency.",
    author: "Jotham Micheni",
    date: "2024-11-20",
    category: "Backend Development",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    readTime: "9 min read",
    slug: "api-development-rest-to-graphql"
  },
  {
    id: 6,
    title: "DevOps Culture: Transforming Software Delivery",
    excerpt: "Explore how DevOps practices can revolutionize your software development and deployment processes.",
    author: "Joseph Wachira",
    date: "2024-11-15",
    category: "DevOps",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    readTime: "6 min read",
    slug: "devops-culture-transforming-software-delivery"
  }
];

const categories = ["All", "Web Development", "Cloud Computing", "UI/UX Design", "Security", "Backend Development", "DevOps"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];
  const regularPosts = filteredPosts.slice(1);

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
              Tech <span className="text-emerald-200">Insights</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights from the world of technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 text-gray-600"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={selectedCategory === category ? "bg-emerald-600 hover:bg-emerald-700" : "text-gray-600"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && !searchTerm && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-emerald-600 hover:bg-emerald-700">{featuredPost.category}</Badge>
                      <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                    </div>
                    <CardTitle className="text-3xl mb-4 text-gray-700 leading-tight hover:text-emerald-600 transition-colors duration-200">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                        <Link href={`/blog/${featuredPost.slug}`} className="flex items-center space-x-2">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "All" && !searchTerm ? regularPosts : filteredPosts).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-600 hover:bg-emerald-700">{post.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-3 text-gray-700 leading-tight group-hover:text-emerald-600 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}