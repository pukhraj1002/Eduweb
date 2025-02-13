"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const sections = {
  "PLACEMENT-PREPARATION": [
    {
      name: "PrepInsta",
      url: "https://prepinsta.com",
      icon: "https://prepinsta.com/favicon.ico",
      description: "For Aptitude",
    },
    {
      name: "GFG",
      url: "https://www.geeksforgeeks.org/prepare-cs-core-subjects-for-placements/",
      icon: "https://www.geeksforgeeks.org/favicon.ico",
      description: "For Core Subjects",
    },
    {
      name: "Striver Sheet",
      url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
      icon: "https://takeuforward.org/favicon.ico",
      description: "For Coding Practice",
    },
    {
      name: "JavaTPoint",
      url: "https://www.javatpoint.com/interview-questions-and-answers",
      icon: "https://static.javatpoint.com/images/favicon.ico",
      description: "For Interview Questions",
    },
    {
      name: "StoneBridge",
      url: "https://www.stonebridge.uk.com/blog/employment/how-to-improve-my-communication-skills-for-an-interview/",
      icon: "https://www.stonebridge.uk.com/favicon.ico",
      description: "For Interview Behaviour",
    },
    {
      name: "SimpliLearn",
      url: "https://www.simplilearn.com/group-discussion-tips-article",
      icon: "https://www.simplilearn.com/ice9/favicon.ico",
      description: "For Group Discussion",
    },
    {
      name: "EnhanCV",
      url: "https://enhancv.com/",
      icon: "https://enhancv.com/favicon.ico",
      description: "For Resume/CV",
    },
  ],
  CODING: [
      {
        name: "Codecademy",
        url: "https://www.codecademy.com",
        icon: "https://www.codecademy.com/favicon.ico",
        description: "Interactive coding courses for various programming languages.",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org",
        icon: "https://www.geeksforgeeks.org/favicon.ico",
        description: "Comprehensive programming tutorials, problem-solving, and interview preparation.",
      },
      {
        name: "W3School",
        url: "https://www.w3schools.com",
        icon: "https://www.w3schools.com/favicon.ico",
        description: "Beginner-friendly tutorials on web development technologies.",
      },
      {
        name: "Code With Harry",
        url: "https://codewithharry.com",
        icon: "https://codewithharry.com/img/favicon.ico",
        description: "Coding tutorials and courses in Hindi for easy learning.",
      },
    ],
    DSA: [
      {
        name: "Striver Sheet",
        url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        icon: "https://takeuforward.org/favicon.ico",
        description: "A well-structured DSA learning sheet by Striver.",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com",
        icon: "https://leetcode.com/favicon.ico",
        description: "Platform for coding challenges, interview preparation, and competitions.",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org",
        icon: "https://www.geeksforgeeks.org/favicon.ico",
        description: "Extensive problem-solving and DSA tutorials.",
      },
      {
        name: "CodeChef",
        url: "https://www.codechef.com/",
        icon: "https://cdn.codechef.com/images/cc-logo-mobile-1.svg",
        description: "DSA advance questions..",
      },
    ],
    DEVELOPMENT: [
      {
        name: "W3School",
        url: "https://www.w3schools.com",
        icon: "https://www.w3schools.com/favicon.ico",
        description: "Web development and programming tutorials.",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@CodeWithHarry",
        icon: "https://www.youtube.com/favicon.ico",
        description: "Vast library of development-related videos and tutorials.",
      },
      {
        name: "Free Code Camp",
        url: "https://www.freecodecamp.org",
        icon: "https://www.freecodecamp.org/favicon-32x32.png?v=6cba562cbd10e31af925a976f3db73f7",
        description: "Free coding courses with hands-on projects and certifications.",
      },
      {
        name: "Edge Impulse",
        url: "https://edgeimpulse.com/",
        icon: "https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/643cf9855ec7fd503038a79b_01%20Primary%20logo.svg",
        description: "AI for any edge device",
      },
    ],
    COMPETITIONS: [
      {
        name: "MLH.io",
        url: "https://mlh.io",
        icon: "https://mlh.io/assets/favicon-4c5df09a41760aeacff090becfb6b745.ico",
        description: "Major League Hacking - hackathon events and resources.",
      },
      {
        name: "HackerEarth",
        url: "https://www.hackerearth.com",
        icon: "https://cdn.hackerearth.com/newton/production/static/images/common/favicon.png",
        description: "Competitive coding, hiring challenges, and hackathons.",
      },
      {
        name: "Hack2Skill",
        url: "https://hack2skill.com",
        icon: "https://hack2skill.com/new/favicon.ico",
        description: "Hackathons, coding challenges, and skill-building events.",
      },
      {
        name: "Dorahacks",
        url: "https://dorahacks.io",
        icon: "https://dorahacks.io/favicon.ico",
        description: "A global hackathon platform for innovative projects.",
      },
      {
        name: "Unstop",
        url: "https://unstop.com",
        icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/favicon/d2c-fav-icon.ico",
        description: "Competitions, hackathons, and upskilling opportunities.",
      },
      {
        name: "Devpost",
        url: "https://devpost.com",
        icon: "https://devpost.com/favicon.ico",
        description: "Hackathons, project hosting, and developer showcases.",
      },
      {
        name: "Devfolio",
        url: "https://devfolio.co",
        icon: "https://devfolio.co/favicons/safari-pinned-tab.svg",
        description: "Hackathons and projects for developers.",
      },
    ],
    "PLACEMENT-INFO": [
      {
        name: "YouTube",
        url: "https://www.youtube.com/@OnlineStudy4u",
        icon: "https://www.youtube.com/favicon.ico",
        description: "Interview preparation, coding tips, and company-specific guidance.",
      },
      {
        name: "PrepInsta",
        url: "https://prepinsta.com",
        icon: "https://prepinsta.com/favicon.ico",
        description: "Placement preparation resources, aptitude questions, and coding tests.",
      },
      {
        name: "InterviewBit",
        url: "https://www.interviewbit.com",
        icon: "https://www.interviewbit.com/favicon.ico",
        description: "Coding practice and interview preparation platform.",
      },
      {
        name: "GFG",
        url: "https://www.geeksforgeeks.org",
        icon: "https://www.geeksforgeeks.org/favicon.ico",
        description: "Extensive problem-solving and DSA tutorials.",
      },
    ],
    TOOLS: [
      {
        name: "Firebase",
        url: "https://firebase.google.com",
        icon: "https://firebase.google.com/favicon.ico",
        description: "Google's backend platform for mobile and web apps.",
      },
      {
        name: "Flutter",
        url: "https://flutter.dev",
        icon: "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
        description: "UI toolkit for building natively compiled applications.",
      },
      {
        name: "Figma",
        url: "https://www.figma.com",
        icon: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
        description: "Web-based UI/UX design and prototyping tool.",
      },
      {
        name: "Bootstrapmade",
        url: "https://bootstrapmade.com",
        icon: "https://bootstrapmade.com/assets/img/logo.png",
        description: "Free Bootstrap themes and templates.",
      },
      {
        name: "BotPress",
        url: "https://botpress.com/",
        icon: "https://cdn.prod.website-files.com/635c4eeb78332f7971255095/637853d3e86a45be95295a19_fabicon.png",
        description: "WordPress platform for website building and CMS.",
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com",
        icon: "https://chat.openai.com/favicon.ico",
        description: "AI chatbot and content generation tool.",
      },
      {
        name: "TinkerCAD",
        url: "https://www.tinkercad.com",
        icon: "https://www.tinkercad.com/favicon.ico",
        description: "3D modeling and circuit simulation platform.",
      },
      {
        name: "WebXR",
        url: "https://immersiveweb.dev/",
        icon: "https://immersiveweb.dev/images/webxrlogo.png",
        description: "Tools for creating WebXR-based immersive experiences.",
      },
      {
        name: "P5",
        url: "https://p5js.org",
        icon: "https://p5js.org/favicon.ico",
        description: "JavaScript library for creative coding and visual arts.",
      },
      {
        name: "Vercel",
        url: "https://vercel.com",
        icon: "https://vercel.com/favicon.ico",
        description: "Frontend deployment platform with serverless functions.",
      },
      {
        name: "Netlify",
        url: "https://www.netlify.com",
        icon: "https://www.netlify.com/favicon.ico",
        description: "Hosting and automation platform for web projects.",
      },
      {
        name: "Whimsical",
        url: "https://whimsical.com",
        icon: "https://whimsical.com/_next_public/favicon-32.png",
        description: "Wireframing, mind mapping, and diagramming tool.",
      },
      {
        name: "Google Teachable Machine",
        url: "https://teachablemachine.withgoogle.com",
        icon: "https://cdn-1.webcatalog.io/catalog/teachable-machine/teachable-machine-icon-filled-256.png?v=1719392793780",
        description: "No-code AI model training tool.",
      },
      {
        name: "V0",
        url: "https://v0.dev",
        icon: "https://v0.dev/assets/icon-light-32x32.png",
        description: "AI-powered UI generation tool.",
      },
      {
        name: "Github",
        url: "https://github.com",
        icon: "https://github.com/favicon.ico",
        description: "Version control and code collaboration platform.",
      },
    ],
    PROJECTS: [
      {
        name: "Nevon Projects",
        url: "https://nevonprojects.com",
        icon: "https://nevonprojects.com/wp-content/uploads/2022/02/cropped-npro-favion-32x32.png",
        description: "A platform for discovering and sharing innovative projects across various domains.",
      },
      {
        name: "Engineers Planet",
        url: "https://engineersplanet.com",
        icon: "https://engineersplanet.com/wp-content/uploads/2023/01/cropped-EngineersPlanet-Logo-icon-512px.png",
        description:
          "A hub for engineering students and professionals to find projects, internships, and career resources.",
      },
      {
        name: "Arduino Project Hub",
        url: "https://create.arduino.cc/projecthub",
        icon: "https://cdn.arduino.cc/header-footer/prod/assets/favicon-arduino/favicon-16x16.png",
        description: "An official Arduino community for sharing projects, tutorials, and learning resources.",
      },
      {
        name: "GitHub",
        url: "https://github.com",
        icon: "https://github.com/favicon.ico",
        description: "A widely used platform for version control and collaborative software development using Git.",
      },
      {
        name: "Kashipara",
        url: "https://kashipara.com",
        icon: "https://www.kashipara.com/asset/images/kashipara.svg",
        description:
          "A free project-sharing platform for students and developers, offering source code and documentation.",
      },
    ],
  // ... other sections remain the same
}

export default function Dashboard() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">EduWeb : Learn and Build</h1>
          <ThemeToggle />
        </div>
        <div className="container mx-auto flex h-16 items-center px-4">
          <p className="text-sm text-muted-foreground">
            Instead of trying to learn everything at once, focus on mastering one thing at a time. Choose a platform
            that suits you and dedicate your efforts to it. There's no need to spread yourself thin by trying to tackle
            them all at once.
          </p>
        </div>
      </header>
      <main className="container mx-auto flex-1 py-6 px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(sections).map(([sectionName, items]) => (
            <div
              key={sectionName}
              className={`rounded-lg border-2 bg-card p-6 transition-all duration-300 ease-in-out hover:border-primary shadow-md
                ${expandedSection === sectionName ? "border-primary" : "border-border"}
                ${expandedSection === sectionName ? "row-span-2" : ""}`}
            >
              <button
                onClick={() => toggleSection(sectionName)}
                className="flex w-full items-center justify-between mb-4"
              >
                <h2 className="text-xl font-bold">{sectionName.replace("-", " ")}</h2>
                {expandedSection === sectionName ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              <div
                className={`space-y-4 overflow-y-auto transition-all duration-300 scrollbar-hide
                ${expandedSection === sectionName ? "max-h-[400px]" : "max-h-[120px]"}`}
                style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
              >
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors duration-200"
                  >
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <div>
                      <span className="font-semibold">{item.name}</span>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="border-t py-6 mt-auto">
        <div className="container mx-auto text-center text-sm text-muted-foreground px-4">
          Build by{" "}
          <Link
            href="https://bento.me/pukhraj2004"
            className="font-medium text-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pukhraj Kushwah
          </Link>
        </div>
      </footer>
    </div>
  )
}

