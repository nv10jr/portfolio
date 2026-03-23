import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsThemedIcon } from "@/components/ui/svgs/nextjs-themed-icon";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Nestjs } from "@/components/ui/svgs/nestjs";
import { Graphql } from "@/components/ui/svgs/graphql";
import { Redis } from "@/components/ui/svgs/redis";
import { AwsThemed } from "@/components/ui/svgs/aws-themed";

export const DATA = {
  name: "Nguyen Vu",
  initials: "NV",
  url: "https://2land.dev/",
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/hochiminh",
  description:
    "Full Stack Software Engineer with 5+ years of experience building scalable web applications and cloud platforms.",
  summary:
    "I'm a Software Engineer based in Ho Chi Minh City, Vietnam, specializing in full-stack development with **TypeScript**, **Node.js**, and **React**. I've built insurance claims management systems, multi-cloud platforms, and internet banking applications. I hold a Bachelor's degree in Computer Software Engineering from [VNUHCM - University of Science (HCMUS)](https://hcmus.edu.vn).",
  avatarUrl: "/me.png",
  photos: [
    // Arranged for balanced masonry: 1 tall (9:16) image per column, alternating themes
    // — Column 1 (items ~1-5) —
    "/photos/photo-6.jpg",   // HCMC sunset skyline (2:3 portrait)
    "/photos/photo-2.jpg",   // Group dinner (4:3 landscape - short, offsets tall)
    "/photos/photo-9.jpg",   // Cloud sea mountain (9:16 TALL)
    "/photos/photo-1.jpg",   // Group dinner (3:4 portrait)
    "/photos/photo-14.jpg",  // Ba Na Hills castle (3:4 portrait)
    // — Column 2 (items ~6-10) —
    "/photos/photo-11.jpg",  // Hanoi flags street (3:4 portrait)
    "/photos/photo-5.jpg",   // City bridge (3:4 portrait)
    "/photos/photo-15.jpg",  // Rustic interior (9:16 TALL)
    "/photos/photo-12.jpg",  // Hoan Kiem lake (3:4 portrait)
    "/photos/photo-3.jpg",   // Bar bottles (3:4 portrait)
    // — Column 3 (items ~11-16) —
    "/photos/photo-7.jpg",   // HCMC night skyline (2:3 portrait)
    "/photos/photo-13.jpg",  // Hanoi Cathedral (3:4 portrait)
    "/photos/photo-16.jpg",  // Monument at night (9:16 TALL)
    "/photos/photo-10.jpg",  // Night pool (3:4 portrait)
    "/photos/photo-4.jpg",   // Jungle nature (3:4 portrait)
    "/photos/photo-8.jpg",   // Seascape boat (3:4 portrait)
  ],
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "Python", icon: Python },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: Nestjs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsThemedIcon },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "GraphQL", icon: Graphql },
    { name: "Redis", icon: Redis },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: AwsThemed },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nguy3n47@gmail.com",
    tel: "+84-979-100-710",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nguy3n47",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nguy3n47",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nguy3n47@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CoverGo",
      href: "https://covergo.com",
      badges: [],
      location: "Ho Chi Minh City, Vietnam · Remote",
      title: "Full Stack Engineer",
      logoUrl: "/covergo.png",
      start: "May 2025",
      end: undefined,
      description:
        "Claims2 Project x Walaa — a comprehensive TPA insurance claims management system for healthcare. Designed and implemented claims adjudication engine, pre-authorization workflows, DWH sync pipeline, payment batch processing, and provider/member management features. Tech: NestJS, Vue3, TypeScript, PostgreSQL, TypeORM, Temporal, GraphQL, Docker, AWS.",
    },
    {
      company: "CloudVerse.AI",
      href: "https://cloudverse.ai",
      badges: [],
      location: "Ho Chi Minh City, Vietnam · Remote",
      title: "Software Engineer",
      logoUrl: "/cloudverse.png",
      start: "Jan 2024",
      end: "May 2025",
      description:
        "Built a multi-cloud management platform. Implemented OAuth2 SSO with Google/Microsoft, set up PostgreSQL Master-Slave replication, integrated Looker for data visualization, developed SKU Analysis for cloud VM migration planning, and built CUR discovery for AWS/Azure/GCP billing. Tech: NestJS, NextJS, GraphQL, PostgreSQL, Redis, RabbitMQ, Docker, AWS.",
    },
    {
      company: "NAB Innovation Centre Vietnam",
      href: "https://www.nab.com.au",
      badges: [],
      location: "Ho Chi Minh City, Vietnam · Hybrid",
      title: "Software Engineer",
      logoUrl: "/nab.png",
      start: "Jun 2023",
      end: "Dec 2023",
      description:
        "NAB Builders — wrote technical documentation for internet banking mini-app including system architecture, environment configuration, and unit test guidelines. Implemented BFF pattern with NodeJS/ExpressJS, participated in Agile/Scrum, and conducted peer code reviews. Tech: NodeJS, ExpressJS, ReactJS, GraphQL, PostgreSQL, TypeScript, Jest, Docker, AWS.",
    },
    {
      company: "LASTMILE WORKS",
      href: "https://lastmileworks.com",
      badges: [],
      location: "Ho Chi Minh City, Vietnam · Remote",
      title: "Junior Software Engineer",
      logoUrl: "/lastmileworks.png",
      start: "Oct 2022",
      end: "May 2023",
      description:
        "Worked on Raknal (bulk ordering platform for real estate) and Sonomama (exhibition management platform). Analyzed and designed product features, defined RESTful APIs, developed modular code with NestJS, and ensured quality/security standards. Tech: NodeJS, NestJS, TypeORM, MySQL, TypeScript, GraphQL, Redis, Jest, Docker, AWS.",
    },
    {
      company: "Vinova",
      href: "https://vinova.sg",
      badges: [],
      location: "Ho Chi Minh City, Vietnam · Remote",
      title: "Fresher Software Engineer",
      logoUrl: "/vinova.png",
      start: "Jan 2021",
      end: "Sep 2022",
      description:
        "Built products from scratch: AuntySG (babysitter marketplace), For the Love of Laundry (eco-friendly laundry service), and Soundfyr (music industry social platform). Designed database schemas, implemented auth, booking, subscription, and Stripe payment systems. Tech: NodeJS, ExpressJS, ReactJS, PostgreSQL, MySQL, Sequelize, TypeScript, Redis, RabbitMQ, Docker, AWS.",
    },
  ],
  education: [
    {
      school: "VNUHCM - University of Science (HCMUS)",
      href: "https://hcmus.edu.vn",
      degree: "Bachelor's degree, Computer Software Engineering",
      logoUrl: "/hcmus.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "VnEShorts",
      href: "#",
      dates: "Personal Project",
      active: false,
      description:
        "A web application used to read short news updates and crawl data from VnExpress.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Web Scraping",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Cinema Ticket Booking",
      href: "#",
      dates: "Personal Project",
      active: false,
      description:
        "A web application that allows users to book movie tickets, including management of theaters, movies, showtimes, and revenue statistics.",
      technologies: [
        "Node.js",
        "TypeScript",
        "React",
        "PostgreSQL",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Easy Download Extension",
      href: "#",
      dates: "Personal Project",
      active: false,
      description:
        "A simple browser extension tool to help download videos on Facebook.",
      technologies: [
        "JavaScript",
        "Chrome Extension",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Chat Realtime",
      href: "#",
      dates: "Personal Project",
      active: false,
      description:
        "A web application that allows multiple users to join a chat room and type chat messages by entering a unique username.",
      technologies: [
        "Node.js",
        "TypeScript",
        "WebSocket",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Scholarship from ScrumViet",
      dates: "February 2020",
      location: "Vietnam",
      description:
        "ScrumViet was created to replicate and share knowledge to everyone. Helping businesses or individuals promote core values and breakthroughs when practicing Scrum/Agile.",
      image: "",
      links: [] as { title: string; icon: React.ReactNode; href: string }[],
    },
    {
      title: "Collaborator at Vietnam Web Summit",
      dates: "December 2019",
      location: "Vietnam",
      description:
        "Vietnam Web Summit is the biggest annual festival of programmers and marketers related to the web field.",
      image: "",
      links: [] as { title: string; icon: React.ReactNode; href: string }[],
    },
  ],
} as const;
