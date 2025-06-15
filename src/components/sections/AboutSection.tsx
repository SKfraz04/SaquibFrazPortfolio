"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills, education } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface SkillItemProps {
  skill: { name: string; level: number; icon: React.ComponentType<{ className?: string }> };
  index: number;
}

function SkillItem({ skill, index }: SkillItemProps) {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <Card className="p-4 h-full glass-dark border-primary-600/20 hover:border-primary-400/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <IconComponent className="text-2xl text-primary-400" />
            <h4 className="font-medium text-sm">{skill.name}</h4>
          </div>
          <Badge variant="secondary" className="text-xs">
            {skill.level}%
          </Badge>
        </div>
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-400 to-accent-cyan rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </Card>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-60 h-60 rounded-full bg-primary-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 rounded-full bg-accent-cyan/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies and blockchain development
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 glass-dark border-primary-600/20">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Badge variant="outline" className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                {personalInfo.location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                2+ Years Experience
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <GraduationCap className="h-3 w-3" />
                B.Tech in Computer Science
              </Badge>
            </div>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <div className="space-y-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Frontend Development</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.frontend.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Backend Development</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.backend.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Blockchain Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Blockchain & Web3</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.blockchain.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Tools & Technologies</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.tools.map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 glass-dark border-primary-600/20 max-w-2xl mx-auto">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.field}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 