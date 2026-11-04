import { Sparkles, Target, Accessibility } from 'lucide-react';
import { NavItem, Service, Project, ExperienceCard, ContactInfo } from './types';

// NAVIGATION
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Approach', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

// CONTACT INFO
export const CONTACT: ContactInfo = {
  email: "castillo.alita@gmail.com",
  linkedin: "https://www.linkedin.com/in/ale-castillo-ld",
  location: "Querétaro, Mexico (US Central Time)",
  cv: "/Alejandra-Castillo-Instructional-Designer.pdf",
};

// SERVICES (Used for historical context, currently unused in UI)
export const SERVICES: Service[] = [];

// PROJECTS - SELECTED CASE STUDIES
export const PROJECTS: Project[] = [
  {
    id: 21,
    title: "Sales Readiness Program: From Calls to Closed Deals",
    category: "Sales Enablement",
    year: "Global SaaS company",
    description: "A diagnostic built from real Gong calls revealed why sellers weren't closing, and led to a new onboarding program and team-wide refresher.",
    image: "/case-sales-readiness.svg",
    imageAlt: "Diagram of the program: diagnose with Gong call simulations, find the gap, build onboarding and job aids, practice in MindTickle, close deals.",
    role: "Global Enablement Learning Experience Designer",
    timeline: "Diagnostic and rollout over several months",
    tools: ["Gong call recordings", "MindTickle", "Call simulations", "Job aids"],
    overview: "At a global tax compliance SaaS company, sellers were reaching prospects and booking calls, but they weren't closing deals. Instead of guessing, we built a diagnostic first: a short course that put sellers through a simulated sales call, modeled on real Gong recordings.",
    challenges: [
      {
        title: "The gap was consultative, not discovery",
        description: "The diagnostic showed sellers could read the customer's need, but they weren't offering the right solution for it."
      },
      {
        title: "Shallow product knowledge, no support in the moment",
        description: "Sellers didn't know the product catalog in depth and had no job aids for quick lookups during live calls."
      }
    ],
    solution: "We designed a more robust onboarding program for new hires and a refresher for AEs, BDRs, SDRs, SEs and CSMs, combining product catalog training, in-call job aids and recurring sales simulations in MindTickle.",
    outcome: "Within a few months, sellers felt more confident in customer conversations, and that confidence translated into closed deals.",
    detailImages: [],
  },
  {
    id: 17,
    title: "Product Training: eLab Analyzer",
    category: "Technical Training",
    year: "2023",
    description: "An interactive hardware guide that simplifies complex machinery operation for new lab technicians.",
    image: "https://i.imgur.com/CVYi306.png",
    imageAlt: "Interactive training screen for the eLab Analyzer diagnostic equipment.",
    role: "Lead Instructional Designer",
    timeline: "3 months",
    tools: ["Articulate Storyline", "Adobe Illustrator", "Blender"],
    overview: "The eLab Analyzer is a sophisticated piece of medical diagnostic equipment. New technicians were struggling to understand the port configurations and maintenance protocols using only paper manuals. This project transformed the technical documentation into an interactive, 3D-style exploration guide.",
    challenges: [
      {
        title: "Cognitive overload",
        description: "Technicians were overwhelmed by the density of information in the 200-page manual."
      },
      {
        title: "No access to the equipment",
        description: "Training often happened before technicians had physical access to the machine."
      }
    ],
    detailImages: [
      "https://i.imgur.com/CVYi306.png",
      "https://i.imgur.com/MfGsZya.png"
    ]
  },
  {
    id: 13,
    title: "Onboarding Learning Path Journey",
    category: "Gamification",
    year: "2024",
    description: "A visual, gamified roadmap for employee onboarding and certification progression.",
    image: "https://i.imgur.com/YI8rznF.png",
    imageAlt: "Gamified onboarding roadmap with milestones and achievements.",
    role: "L&D Program Manager",
    timeline: "2 months",
    tools: ["Replit", "Rise 360", "Photoshop"],
    overview: "New hires lacked a clear onboarding structure during their first 90 days. I designed a 'Hero's Journey' themed learning path that visually tracked progress, unlocked achievements and gave new hires clear milestones.",
    challenges: [
      {
        title: "Lack of engagement",
        description: "Traditional checklists didn't motivate new hires to complete training."
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
    imageAlt: "Infographic explaining adolescent brain development.",
    role: "Visual Designer & SME Liaison",
    timeline: "2 months",
    tools: ["Adobe Creative Suite", "Articulate 360"],
    overview: "Social workers needed to understand the biological basis of adolescent behavior to better serve their clients. I collaborated with neuroscientists to translate dense academic papers into accessible, visually compelling infographics and microlearning modules.",
    challenges: [
      {
        title: "Complex jargon",
        description: "Converting PhD-level terminology into actionable insights for field workers."
      },
      {
        title: "Visual abstraction",
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
    title: "Hand Hygiene Microlearning",
    category: "Compliance Training",
    year: "2022",
    description: "A visual tutorial and job aids that replaced a dry, click-next compliance module for medical staff.",
    image: "https://i.imgur.com/TGvi6Cm.png",
    imageAlt: "Illustrated tutorial pairing each handwashing step with its instruction.",
    role: "E-Learning Developer",
    timeline: "6 weeks",
    tools: ["Storyline 360", "Vyond", "Audacity"],
    overview: "Typical compliance training is a dry, click-next experience. I redesigned the handwashing module as a highly visual tutorial that pairs each correct technique with its instructional concept at the moment it's shown.",
    challenges: [
      {
        title: "Passive compliance training",
        description: "Staff clicked through text-heavy slides without retaining the correct technique."
      },
      {
        title: "Recall on the job",
        description: "Staff needed a quick reminder at the point of care, not just during the course."
      }
    ],
    solution: "A microlearning tutorial plus printable job aids, so the technique stays visible where staff actually wash their hands.",
    detailImages: [
      "https://i.imgur.com/QM8PPQy.png",
      "https://i.imgur.com/ytBOvQS.png"
    ]
  }
];

// APPROACH CARDS
export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    title: "Sales & GTM Enablement",
    icon: Target,
    problem: "Sellers book meetings but don't close, or ramp too slowly on complex products.",
    solution: "Diagnose the real skill gap from call data, then build onboarding, refreshers, job aids and practice simulations around it.",
    benefit: "Revenue teams that sell complex SaaS with confidence, measured by what they do differently."
  },
  {
    title: "AI-Accelerated Content",
    icon: Sparkles,
    problem: "Product launches move faster than training can keep up.",
    solution: "Use generative AI for outlining, scripting, video (Synthesia) and rapid prototyping, with human judgment on every decision.",
    benefit: "Launch-speed learning that stays accurate and on-brand."
  },
  {
    title: "Accessible by Default",
    icon: Accessibility,
    problem: "Training that excludes part of the audience, or fails an accessibility review late in the project.",
    solution: "Design to WCAG from the first storyboard: captions, contrast, keyboard navigation and plain language.",
    benefit: "Inclusive learning that works for every learner and every market."
  }
];
