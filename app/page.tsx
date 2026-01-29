"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Code, ChevronRight, Database, Server, Layout,
  BookOpen, FlaskConical, Award, GraduationCap,
  MessageCircle, Terminal, Trophy
} from 'lucide-react';
import Image from 'next/image';


// --- ANIMATION SETTINGS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- DATA (Fill this with your real info) ---
const portfolioData = {
  name: "Md Helal Uddin",
  title: "Full Stack Software Engineer",
  bio: "I bridge the gap between design and engineering. I don't just write code; I architect scalable solutions and craft intuitive user interfaces.",
  email: "helalaiub8009@gmail.com",
  phone: "8801825358009",
  
  skills: [
    // --- NEW SECTION 1: LANGUAGES ---
    {
      category: "Programming Languages",
      icon: Terminal, // Using the new icon
      items: ["C", "C++", "Java", "Python", "JavaScript","C#","Go",
        "Data Structure","Algorithm"
      ]
    },
    // --- NEW SECTION 2: PROBLEM SOLVING (With Links) ---
    {
      category: "Problem Solving",
      icon: Trophy,
      items: [
        { name: "CodeChef (Max 1600)", link: "https://www.codechef.com/users/your_username" },
        { name: "LeetCode (500+ Solved)", link: "https://leetcode.com/your_username" },
        { name: "Codeforces", link: "https://codeforces.com/profile/your_username" }
      ]
    },
    
    { 
      category: "Frontend", 
      icon: Layout,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] 
    },
    { 
      category: "Backend", 
      icon: Server,
      items: ["Node.js", "Express", "Python", "Go"] 
    },
    { 
      category: "Database & Cloud", 
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "MySQL", "OracleDB"] 
    }
  ],
  
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      school: "American International University-Bangladesh",
      year: "2023 - 2026",
      CGPA: "3.70",
      desc: "Focuses on Problem Solving, Data Structure, Algorithm & Research"
    },
    {
      degree: "Higher Secondary Certificate",
      school: "Bhola Government College",
      year: "2019 - 2021",
      GPA: "5.00",
      desc: "Focus on Science and Mathematics."
    },
    {
      degree: "Secondary School Certificate",
      school: "Bhola Residential Cadet School & College",
      year: "2018 - 2019",
      GPA: "4.72",
      desc: "Focus on Science, Mathematics and ECA"
    },
    {
      degree: "Junior Dakhil Certificate",
      school: "Tamirul Ummah Cadet Madrasha",
      year: "2016",
      GPA: "5.00",
      desc: "Focuses on academic and reading books"
    }
  ],

  research: [
    {
      title: "AI and IoT Convergence for Smart Environments: Integrating Machine and Quantum Learning for Renewable Energy and Air Quality Monitoring",
      published: "28TH IEEE INTERNATIONAL CONFERENCE ON COMPUTER AND INFORMATION TECHNOLOGY",
      year: "2025",
      desc: "Proposed a novel convolutional neural network architecture for real-time defect detection on assembly lines."
    },
    {
      title: "Smart Mining of Urban Air: A Data-Driven Solution to Dust Pollution in Rapidly Growing Cities",
      published: "RUEC 1st International Research Conference at University of Rajshahi",
      year: "2025",
      desc: "Proposed a Data-Driven Solution"
    },
    {
      title: "AI-Driven Big Data Health Analytics: A threshold-Optimized Framework for Disease Risk Prediction",
      published: "International Conference on Applied Statistics and Data Science 2025 at Dhaka University",
      year: "2025",
      desc: "Health Disease Risk Prediction"
    },
    {
      title: "Bridging Analytics and Engineering: Developing Data-Driven Frameworks for Sustainable Innovation and Growth",
      published: "International Conference on Applied Statistics and Data Science 2025 at Dhaka University",
      year: "2025",
      desc: "Developing Data-Driven Frameworks for Sustainable Innovation and Growth"
    },
    {
      title: "Natural Language Inference with Multimodal Fusion: Integrating Text and Visual Inputs for Improved Reasoning",
      published: "International Conference on Applied Statistics and Data Science 2025 at Dhaka University",
      year: "2025",
      desc: "Integrating Text and Visual Inputs for Improved Reasoning"
    }
  ],

  projects: [
    {
      title: "City_Corporation",
      desc: "Digitalized City Corporation services",
      tags: ["HTML", "CSS", "js","PHP","MySQL"],
      link: "./public/Picture1.png",
      github: "https://github.com/Helal-AIUB/City_Corporation_e_Service_Portal.git",
      image: "/Picture3.png"
    },
    {
      title: "Grocery Shop Management System",
      desc: "An E-Commerce Site Project",
      tags: ["C#", "MVC", ".NET"],
      link: "#",
      github: "https://github.com/Helal-AIUB/Grocery_Shop_Management_System.git",
      image: "/grocery.png"
    },
    {
      title: "Re-Indroduce Bangladesh",
      desc: "Banglades famous tourists spot",
      tags: ["C++", "graphics", "OpenGL"],
      link: "#",
      github: "https://github.com/Helal-AIUB/Computer-Graphics-Project.git",
      image: "/graphics.png"
    }
  ],

  certifications: [
    {
      name: "28th IEEE International Conference On Computer & Information Technology",
      issuer: "IEEE Bangladesh Section",
      date: "2025",
      image: "/c3.png" // <--- Add your image filename here
    },
    {
      name: "Achieved 2* Coder Rank On Codechef",
      issuer: "Phitron",
      date: "2025",
      image: "/c2.png" // <--- Add your image filename here
    },
    {
      name: "Campus Hero-2024",
      issuer: "Programming Hero",
      date: "2024",
      image: "/c1.png" // <--- Add your image filename here
    },
    {
      name: "Public Speaking",
      issuer: "10-Minutes School",
      date: "2023",
      image: "/c4.png" // <--- Add your image filename here
    },
    {
      name: "Machine Learning Data Pre-processing",
      issuer: "Business Automation Ltd",
      date: "2025",
      image: "/c5.png" // <--- Add your image filename here
    },
    {
      name: "Science Poster Contest Spring 2022-23",
      issuer: "American International University-Bangladesh",
      date: "2023",
      image: "/c6.png" // <--- Add your image filename here
    }
  ],
};

// --- COMPONENTS ---

const AmbientBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-950">
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
    <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px] animate-pulse delay-2000" />
  </div>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 hover:bg-slate-800/50 transition-all duration-300 group ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <motion.div variants={fadeInUp} className="mb-16">
    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">{title}</h2>
    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mt-4 rounded-full" />
  </motion.div>
);

// --- MAIN PAGE ---
export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Navigation Links
  const navLinks = ["Home", "Education", "Skills", "Research", "Projects", "Certifications", "Contact"];

  return (
    <div className="text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen bg-slate-950">
      <AmbientBackground />
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl overflow-x-auto">
          <ul className="flex justify-between items-center gap-6 min-w-max">
            {navLinks.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center w-full"
          >
            <div className="order-2 md:order-1">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for Freelance
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-4">
                 <span className="text-slate-400 font-medium text-lg">Hi, my name is</span>
                 <h2 className="text-3xl font-bold text-white mt-1">{portfolioData.name}</h2>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Building the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">
                  Digital Future.
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                {portfolioData.bio}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <a href="#projects" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
                  View Projects <ChevronRight size={18} />
                </a>
                <a href="#contact" className="px-8 py-4 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800/50 transition-colors">
                  Contact Me
                </a>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="order-1 md:order-2 relative">
               <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-700/50 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 ease-out bg-slate-800">
                     <Image src="/profile3.jpg" alt="Profile" fill className="object-cover" />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. EDUCATION SECTION (With CGPA & GPA) */}
        <section id="education" className="py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <SectionTitle subtitle="My Journey" title="Education" />
            <div className="space-y-6">
              {portfolioData.education.map((edu, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlassCard className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="p-4 bg-slate-800 rounded-xl text-cyan-400">
                      <GraduationCap size={32} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                          <div className="text-lg text-cyan-400 font-medium mb-1">{edu.degree}</div>
                        </div>
                        
                        <div className="flex gap-2 mt-2 md:mt-0">
                          {/* Logic for CGPA Badge */}
                          {edu.CGPA && (
                            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold font-mono inline-block">
                              CGPA: {edu.CGPA}
                            </div>
                          )}
                          
                          {/* Logic for GPA Badge */}
                          {edu.GPA && (
                            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold font-mono inline-block">
                              GPA: {edu.GPA}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-sm font-mono text-slate-500 mb-4 mt-1">{edu.year}</div>
                      <p className="text-slate-400">{edu.desc}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. SKILLS */}
        {/* 3. SKILLS (Custom Layout: 2 on top, 3 on bottom) */}
        <section id="skills" className="py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <SectionTitle subtitle="Expertise" title="Tech Stack & Problem Solving" />
            
            {/* --- ROW 1: First 2 Items (Problem Solving & Languages) --- */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {portfolioData.skills.slice(0, 2).map((skill, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlassCard className="h-full">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
                      <skill.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, index) => {
                        if (typeof item === 'string') {
                          return (
                            <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700/50 hover:border-cyan-500/50 transition-colors cursor-default">
                              {item}
                            </span>
                          );
                        } else {
                          return (
                            <a 
                              key={index} 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1 bg-violet-500/10 text-violet-300 text-xs font-bold rounded border border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400 transition-all"
                            >
                              {item.name} <ExternalLink size={10} />
                            </a>
                          );
                        }
                      })}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* --- ROW 2: Next 3 Items (Frontend, Backend, Database) --- */}
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.skills.slice(2).map((skill, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlassCard className="h-full">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
                      <skill.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700/50 hover:border-cyan-500/50 transition-colors cursor-default">
                          {item as string}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </section>

        {/* 4. RESEARCH SECTION (NEW) */}
        <section id="research" className="py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <SectionTitle subtitle="Discovery" title="Research & Publications" />
            <div className="grid gap-6">
              {portfolioData.research.map((res, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlassCard>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="mt-1 text-violet-400"><FlaskConical size={24} /></div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{res.title}</h3>
                          <p className="text-sm text-cyan-500 font-mono mt-1">{res.published} • {res.year}</p>
                          <p className="text-slate-400 mt-4 leading-relaxed">{res.desc}</p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 5. PROJECTS (Updated with GitHub Links) */}
        {/* 5. PROJECTS (With Images) */}
        <section id="projects" className="py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <SectionTitle subtitle="Portfolio" title="Featured Projects" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlassCard className="h-full flex flex-col p-0 overflow-hidden">
                    {/* IMAGE CONTAINER */}
                    <div className="relative h-48 w-full bg-slate-800 group-hover:scale-105 transition-transform duration-500">
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-bold text-2xl">
                          {project.title[0]}
                        </div>
                      )}
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                    </div>
                    
                    {/* CONTENT CONTAINER */}
                    <div className="p-6 flex flex-col flex-grow relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                        <div className="flex gap-3">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Code">
                            <Github size={20} />
                          </a>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm mb-6 flex-grow">{project.desc}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase font-bold text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 6. CERTIFICATIONS (With Photos) */}
        <section id="certifications" className="py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <SectionTitle subtitle="Achievements" title="Certifications" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.certifications.map((cert, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlassCard className="h-full flex flex-col p-0 overflow-hidden hover:border-cyan-500/30 transition-colors">
                    
                    {/* CERTIFICATE IMAGE AREA */}
                    <div className="relative h-56 w-full bg-slate-800 border-b border-slate-700/50 group-hover:opacity-90 transition-opacity">
                      {cert.image ? (
                        <Image 
                          src={cert.image} 
                          alt={cert.name} 
                          fill 
                          className="object-cover"
                        />
                      ) : (
                        // Fallback if no image: Show a big Icon
                        <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                           <Award size={64} opacity={0.5} />
                        </div>
                      )}
                    </div>

                    {/* TEXT BELOW (Title of Ceremony) */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {cert.name}
                      </h3>
                      <p className="text-sm font-mono text-cyan-400">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        Issued: {cert.date}
                      </p>
                    </div>

                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 7. CONTACT */}
        {/* 7. CONTACT */}
        <section id="contact" className="py-32 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
             <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-8">
              Let's build something <br />
              <span className="text-slate-500">amazing together.</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-center gap-6 mt-8">
              {/* Email Button */}
              <a 
                href={`mailto:${portfolioData.email}`} 
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-1"
              >
                <Mail size={22} />
                Send Email
              </a>

              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/${portfolioData.phone}?text=Hi%20Reday,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat!`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all hover:-translate-y-1"
              >
                <MessageCircle size={22} />
                WhatsApp
              </a>
            </motion.div>

          </motion.div>
        </section>

      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900/50">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}