"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

const roles = [
  "Frontend Developer",
  "MERN Stack Developer",
  "React.js Specialist",
  "Blockchain Enthusiast"
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentRole) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText !== "") {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-800/20 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-cyan/20 blur-3xl animate-float" 
          style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-600/10 blur-3xl animate-glow" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* 3D Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading mb-2">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="gradient-text neon-glow">Saquib Fraz</span>
          </h1>
        </motion.div>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-code text-primary-400">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Passionate about building exceptional web experiences with React, Next.js, 
          and cutting-edge blockchain technologies. Currently crafting innovative solutions 
          at Code Brew Labs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button size="lg" className="group relative overflow-hidden">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Button>
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="/saquib fraz.pdf" download="Saquib_Fraz_Resume.pdf">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex gap-6 justify-center"
        >
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary-400 transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:Saquib.fraz309@gmail.com"
            className="text-muted-foreground hover:text-primary-400 transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 