import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer Intern – Full Stack",
        company_name: "EVZIP",
        icon: meta,
        iconBg: "#accbe1",
        date: "June 2025 - September 2025",
        points: [
            "Developed a full-stack EV fleet management platform using React, TypeScript, Node.js/Express, and MongoDB Atlas with real-time vehicle tracking and analytics dashboards",
            "Implemented RESTful APIs with JWT authentication, role-based access control, and offline-first architecture using IndexedDB for seamless user experience",
            "Built responsive UI components with Tailwind CSS and architected scalable backend services featuring comprehensive error handling and audit logging",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/vishnuvardan2004',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vishnu-vardan-90bb96253/',
    }
];

export const projects = [
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: '3D Portfolio Website',
        description: 'Built an interactive 3D developer portfolio using React, Vite, TailwindCSS, and Three.js with React Three Fiber for real-time rendering. Enhanced user experience with smooth, GPU-accelerated animations powered by Framer Motion. Integrated Aceternity UI, Magic UI, and EmailJS for responsive design and seamless contact workflows.',
        link: 'https://github.com/vishnuvardan2004',
    },
    {
        iconUrl: nextjs,
        theme: 'btn-back-green',
        name: 'Multi-Tenant E-commerce Platform',
        description: 'Developed a Gumroad-style platform with Next.js 15, React, Stripe Connect, MongoDB, and Payload CMS. Implemented multi-tenant architecture with vendor subdomains, storefront customization, and role-based access control. Built admin/merchant dashboards for product catalogs, filtering, reviews, libraries, and secure payments.',
        link: 'https://github.com/vishnuvardan2004',
    },
    {
        iconUrl: nodejs,
        theme: 'btn-back-red',
        name: 'Learning Management System (LMS)',
        description: 'Created a modern LMS using Next.js, Prisma ORM, Neon Postgres, and Tigris for scalable data handling. Added authentication with Better-Auth and validation with Zod to ensure security and data consistency. Designed course management, user roles, and progress tracking with UI powered by TailwindCSS and Shadcn/UI, deployed on Vercel.',
        link: 'https://github.com/vishnuvardan2004',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-yellow',
        name: 'CGPA Calculator',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/vishnuvardan2004',
    }
];