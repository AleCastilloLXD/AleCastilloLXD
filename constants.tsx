import { Layout, Globe, Code2, Rocket, Smartphone, Database, Brain, Award, Sparkles, Zap, Users } from 'lucide-react';
import { NavItem, Service, Project, ExperienceCard, ContactInfo } from './types';

// NAVIGATION
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Methodology', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

// CONTACT INFO
export const CONTACT: ContactInfo = {
  email: "castillo.alita@gmail.com",
  linkedin: "https://linkedin.com/in/ale-castillo-LD",
  github: "https://github.com/yourusername",
  location: "Mexico City (CST) — Available Globally"
};

// SERVICES (Used for historical context, currently unused in UI)
export const SERVICES: Service[] = [];

// PROJECTS - TOP 4 SELECTION WITH DETAILS
export const PROJECTS: Project[] = [
  {
    id: 17,
    title: "Product Training: eLab Analyzer",
    category: "Technical Training",
    year: "2023",
    description: "An interactive hardware guide that simplifies complex machinery operation for new lab technicians.",
    image: "https://i.imgur.com/CVYi306.png",
    role: "Lead Instructional Designer",
    timeline: "3 Months",
    tools: ["Articulate Storyline", "Adobe Illustrator", "Blender"],
    overview: "The eLab Analyzer is a sophisticated piece of medical diagnostic equipment. New technicians were struggling to understand the port configurations and maintenance protocols using only paper manuals. This project transformed the technical documentation into an interactive 3D-like exploration guide.",
    challenges: [
      {
        title: "Cognitive Overload",
        description: "Technicians were overwhelmed by the density of information in the 200-page manual."
      },
      {
        title: "Access to Equipment",
        description: "Training often happened before technicians had physical access to the machine."
      }
    ],
    detailImages: [
      "https://i.imgur.com/CVYi306.png", // Hero/Main
      "https://i.imgur.com/MfGsZya.png"  // Detail 1
    ]
  },
  {
    id: 13,
    title: "Onboarding Learning Path Journey",
    category: "Gamification",
    year: "2024",
    description: "A visual, gamified roadmap for employee onboarding and certification progression.",
    image: "https://i.imgur.com/YI8rznF.png",
    role: "L&D Program Manager",
    timeline: "2 Months",
    tools: ["Replit", "Rise 360", "Photoshop"],
    overview: "Employee retention rates during the first 90 days were low due to an unclear onboarding structure. I designed a 'Hero's Journey' themed learning path that visually tracked progress, unlocked achievements, and provided clear milestones for new hires.",
    challenges: [
      {
        title: "Lack of Engagement",
        description: "Traditional checklists were boring and did not motivate new hires to complete training."
      },
      {
        title: "Visibility",
        description: "Managers had no easy way to see where their new hires were getting stuck."
      }
    ],
    detailImages: [
      "https://i.imgur.com/KiF1h7f.gif",
      "https://i.imgur.com/L7wunp5.png"
    ]
  },
  {
    id: 3,
    title: "Adolescent Neuroscience",
    category: "Medical Education",
    year: "2023",
    description: "Scientific infographic series simplifying complex biological processes for social workers.",
    image: "https://i.imgur.com/ieS005Y.png",
    role: "Visual Designer & SME Liaison",
    timeline: "2 Months",
    tools: ["Adobe Creative Suite", "Articulate Suite"],
    overview: "Social workers needed to understand the biological basis of adolescent behavior to better serve their clients. I collaborated with neuroscientists to translate dense academic papers into accessible, visually compelling infographics and micro-learning modules.",
    challenges: [
      {
        title: "Complex Jargon",
        description: "Converting Ph.D. level terminology into actionable insights for field workers."
      },
      {
        title: "Visual Abstraction",
        description: "Accurately representing brain development stages without oversimplifying the science."
      }
    ],
    detailImages: [
      "https://i.imgur.com/ieS005Y.png",
      "https://i.imgur.com/GmHXEmH.png"
    ]
  },
  {
    id: 9,
    title: "Infographics and Tutorials",
    category: "Technical Skills",
    year: "2022",
    description: "Acknowledging the dry, 'click-next' format of typical compliance training.",
    image: "https://i.imgur.com/TGvi6Cm.png",
    role: "E-Learning Developer",
    timeline: "6 Weeks",
    tools: ["Storyline 360", "Vyond", "Audacity"],
    overview: "Designed a highly visual tutorial connecting images with core concepts. This approach ensured that the visual stimuli (the correct technique) were immediately paired with the corresponding instructional concept.",
    challenges: [
      {
        title: "Action",
        description: "Direct transformation of the Handwashing Module."
      },
      {
        title: "Impact",
        description: "Microlearning solution (with job aids) proved vital for medical staff training."
      }
    ],
    detailImages: [
      "https://i.imgur.com/QM8PPQy.png",
      "https://i.imgur.com/ytBOvQS.png"
    ]
  }
];

// EXPERIENCE CARDS
export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    title: "Strategic Instructional Design & AI-Powered Content",
    icon: Sparkles,
    problem: "Outdated, ineffective training.",
    solution: "Design and lead dynamic learning paths, leveraging Generative AI for accelerated content creation.",
    benefit: "Future-proof, engaging experiences that boost skills and align with business goals."
  },
  {
    title: "E-learning System Optimization & Management",
    icon: Zap,
    problem: "Inefficient platforms or unengaging courses.",
    solution: "Optimize your e-learning catalog and LMS with rigorous QA and seamless functionality.",
    benefit: "Streamlined, high-performing e-learning that maximizes engagement and ROI."
  },
  {
    title: "Project Leadership & Collaborative Delivery",
    icon: Users,
    problem: "Unfocused projects, missed deadlines, or lack of buy-in.",
    solution: "Lead cross-functional teams, ensuring clear direction, strong stakeholder collaboration, and on-time delivery.",
    benefit: "Projects completed efficiently, with a strong partnership approach that brings your vision to life."
  }
];