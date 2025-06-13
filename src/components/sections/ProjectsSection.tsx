"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github, Globe } from "lucide-react";
import Link from "next/link";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group perspective-1000"
    >
      <Card className="relative h-full overflow-hidden glass-dark border-primary-600/20 hover:border-primary-400/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 preserve-3d">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
              {project.chain && (
                <Badge variant="outline" className="text-xs">
                  {project.chain}
                </Badge>
              )}
            </div>
            <Badge className="text-xs">
              {project.category}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.live && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                asChild
              >
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                asChild
              >
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allProjects = [...projects.blockchain, ...projects.web];
  const filteredProjects = activeCategory === "all" 
    ? allProjects
    : activeCategory === "blockchain"
    ? projects.blockchain
    : projects.web;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-primary-600/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 rounded-full bg-accent-cyan/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in web development and blockchain technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className="min-w-[100px]"
          >
            <Globe className="h-4 w-4 mr-2" />
            All
          </Button>
          <Button
            variant={activeCategory === "blockchain" ? "default" : "outline"}
            onClick={() => setActiveCategory("blockchain")}
            className="min-w-[100px]"
          >
            Blockchain
          </Button>
          <Button
            variant={activeCategory === "web" ? "default" : "outline"}
            onClick={() => setActiveCategory("web")}
            className="min-w-[100px]"
          >
            Web Apps
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 