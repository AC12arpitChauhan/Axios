import type { TeamMember, SocialMediaLink } from "@/types";

// ─── Core Team ───────────────────────────────────────────────────────────────

export const coreTeam: TeamMember[] = [
  { id: 1, name: "Arpit Chauhan", role: "Co-Coordinator", img: "/arpit.png" },
  { id: 2, name: "Dhruv Sarin", role: "Coordinator", img: "/dhruv.jpg" },
  { id: 3, name: "Ashmit Rajput", role: "Co-Coordinator", img: "/ashmit.jpg" },
];

// ─── Leads ───────────────────────────────────────────────────────────────────

export const leads: TeamMember[] = [
  { id: 4, name: "Ishan Mishra", role: "Web Dev Lead", img: "/ishan-mishra.jpeg" },
  { id: 5, name: "Samkit Jain", role: "App Dev Lead", img: "/profile.svg" },
  { id: 6, name: "Krish Chordiya", role: "GenAI Lead", img: "/krishc.jpg" },
  { id: 7, name: "Aditi Mishra", role: "AI/ML Lead", img: "/aditi_mishra.jpg" },
  { id: 8, name: "Yash Jain", role: "DevOps Lead", img: "/profile.svg" },
  { id: 9, name: "Deepanshu Rajput", role: "Management Lead", img: "/deepanshu.jpg" },
  { id: 10, name: "Suraj Mishra", role: "Research Lead", img: "/suraj.png" },
];

// ─── Assistant Leads ─────────────────────────────────────────────────────────

export const assistantWebDev: TeamMember[] = [
  { id: 11, name: "Rafat Alam", role: "Assistant Web Lead", img: "/2025/Rafat Alam.jpeg" },
  { id: 12, name: "Tanuj Singh", role: "Assistant Web Lead", img: "/2025/Tanuj Singh.jpeg" },
];

export const assistantAppDev: TeamMember[] = [
  { id: 13, name: "Sarthak Patil", role: "Assistant App Lead", img: "/2025/Sarthak Patil.jpg" },
  { id: 14, name: "Atul Kumar", role: "Assistant App Lead", img: "/2025/Atul Kumar.jpg" },
];

export const assistantGameDev: TeamMember[] = [
  { id: 15, name: "Daksh Jain", role: "Assistant Game Dev Lead", img: "/2025/Daksh Jain.jpg" },
  { id: 16, name: "Animesh Singh", role: "Assistant Game Dev Lead", img: "/2025/AnimeshSingh.jpg" },
];

export const assistantGenAI: TeamMember[] = [
  { id: 17, name: "Anuj Ram Shrivastava", role: "Assistant GenAI Lead", img: "/2025/Anuj ram shrivastava.jpg" },
];

export const assistantDataScience: TeamMember[] = [
  { id: 18, name: "Manoor Sufiyan Ansari", role: "Assistant Data Science Lead", img: "/2025/Manooooorr.jpg" },
];

export const assistantAIML: TeamMember[] = [
  { id: 19, name: "Harsh Kumar Saxena", role: "Assistant AI/ML Lead", img: "/2025/Harsh Saxena..jpeg" },
];

export const assistantDevOps: TeamMember[] = [
  { id: 20, name: "Nishanth S", role: "Assistant DevOps Lead", img: "/2025/Nishanth.jpg" },
];

export const assistantResearch: TeamMember[] = [
  { id: 21, name: "Dhruv Bhola", role: "Assistant Research Lead", img: "/2025/Dhruv Bhola.jpg" },
];

// ─── Operations Teams ────────────────────────────────────────────────────────

export const eventManagementTeam: TeamMember[] = [
  { id: 22, name: "Utkarsh Soni", role: "Event Management Team", img: "/2025/Copy of UTKARSH SONI_.png" },
  { id: 23, name: "Nishant Yadav", role: "Event Management Team", img: "/2025/Nishant Yadav.png" },
  { id: 24, name: "Garvit Yadav", role: "Event Management Team", img: "/2025/Garvit Yadav.jpg" },
];

export const prOutreachTeam: TeamMember[] = [
  { id: 25, name: "Atharv Agrawal", role: "PR & Outreach Team", img: "/2025/Atharv Agrawal.jpg" },
  { id: 26, name: "Rohit Malviya", role: "PR & Outreach Team", img: "/2025/Rohit Malviya.jpg" },
  { id: 27, name: "Shreay Agarwal", role: "PR & Outreach Team", img: "/2025/Shreay Agrawal.JPG" },
];

export const socialMediaTeam: TeamMember[] = [
  { id: 28, name: "Vibhu Roy", role: "Social Media Team", img: "/2025/vibhu.png" },
  { id: 29, name: "Aman Sharma", role: "Social Media Team", img: "/2025/Aman Sharma.jpg" },
  { id: 30, name: "Mrigneeta Verma", role: "Social Media Team", img: "/2025/Mrigneeta Verma.png" },
];

export const creativeTeam: TeamMember[] = [
  { id: 31, name: "Rohit", role: "Video Editor", img: "/2025/ROHIT MEENA.jpg" },
  { id: 32, name: "Jayashis Barua", role: "Graphic Designer", img: "/2025/Jayashis Barua.jpeg" },
];

// ─── Aggregate ───────────────────────────────────────────────────────────────

/** Combined array of all team members across every sub-team. */
export const fullTeam: TeamMember[] = [
  ...coreTeam,
  ...leads,
  ...assistantWebDev,
  ...assistantAppDev,
  ...assistantGameDev,
  ...assistantGenAI,
  ...assistantDataScience,
  ...assistantAIML,
  ...assistantDevOps,
  ...assistantResearch,
  ...eventManagementTeam,
  ...prOutreachTeam,
  ...socialMediaTeam,
  ...creativeTeam,
];

// ─── Social Media Links ──────────────────────────────────────────────────────

export const socialMedia: SocialMediaLink[] = [
  {
    id: 1,
    img: "/image.png",
    link: "https://www.instagram.com/axios.iiitbhopal/",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/axios-iiit-bhopal/",
  },
];
