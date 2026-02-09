export const coreTeam = [
  {
    id: 1,
    name: "Arpit Chauhan",
    role: "Tech Lead",
    img: "/profile.svg", // Placeholder, user image not available yet
    link: "https://twitter.com/arpit",
  },
  {
    id: 2,
    name: "Dev Patel",
    role: "Creative Director",
    img: "/profile.svg",
    link: "https://twitter.com/dev",
  },
  {
    id: 3,
    name: "Sarah Khan",
    role: "Operations Lead",
    img: "/profile.svg",
    link: "https://twitter.com/sarah",
  },
  {
    id: 4,
    name: "Rohan Gupta",
    role: "Community Manager",
    img: "/profile.svg",
    link: "https://twitter.com/rohan",
  },
];

// Generate 32 members for the full team page
export const fullTeam = [
  ...coreTeam,
  ...Array.from({ length: 28 }).map((_, i) => ({
    id: i + 5,
    name: `Team Member ${i + 1}`,
    role: "Core Team Member",
    img: "/profile.svg",
    link: "#",
  })),
];

export const socialMedia = [
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
