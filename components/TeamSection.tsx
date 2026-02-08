"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dhruv Sarin",
    role: "COORDINATOR",
    image: "/dhruv.jpg",
  },
  {
    name: "Arpit Chauhan",
    role: "CO-COORDINATOR",
    image: "/arpit.png",
  },
  {
    name: "Ashmit Rajput",
    role: "CO-COORDINATOR",
    image: "/ashmit.jpg",
  },
  {
    name: "Ishan Mishra",
    role: "WEB DEV LEAD",
    image: "/ishan.png",
  },
  {
    name: "Samkit Jain",
    role: "APP DEV LEAD",
    image: "/samkit.png",
  },
  {
    name: "Krish Chordiya",
    role: "GENAI LEAD",
    image: "/krishc.jpg",
  },
  {
    name: "Aditi Mishra",
    role: "AI/ML LEAD",
    image: "/aditi.png",
  },
  {
    name: "Yash Jain",
    role: "DEVOPS LEAD",
    image: "/yash.png",
  },
  {
    name: "Deepanshu Rajput",
    role: "MANAGEMENT LEAD",
    image: "/deepanshu.jpg",
  },
  {
    name: "Suraj Mishra",
    role: "RESEARCH LEAD",
    image: "/suraj.png",
  },
];

const assistantMembers = [
  {
    name: "Tanuj Singh",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/2025/Tanuj Singh.jpeg",
    linkdin: "https://portfolio-tanuj-singh.vercel.app/#top",
  },
  {
    name: "Rafat Alam",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/2025/Rafat Alam.jpeg",
  },
  {
    name: "Sarthak Patil",
    role: "ASSISTANT APP DEVELOPER",
    image: "/2025/Sarthak Patil.jpg",
  },
  {
    name: "Atul Kumar",
    role: "ASSISTANT APP DEVELOPER",
    image: "/2025/Atul Kumar.jpg",
  },
  {
    name: "Daksh Jain",
    role: "ASSISTANT GAME DEV LEAD",
    image: "/2025/Daksh Jain.jpg",
  },
  {
    name: "Animesh Singh",
    role: "ASSISTANT GAME DEV LEAD",
    image: "/2025/AnimeshSingh.jpg",
  },
  {
    name: "Anuj Ram Shrivastava",
    role: "ASSISTANT GEN AI LEAD",
    image: "/2025/Anuj ram shrivastava.jpg",
  },
  {
    name: "Manoor Sufiyan Ansari",
    role: "ASSISTANT DATA SCIENCE LEAD",
    image: "/2025/Manooooorr.jpg",
  },
  {
    name: "Harsh Kumar Saxena",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/2025/Harsh Saxena..jpeg",
  },
  {
    name: "Nishanth S",
    role: "ASSISTANT DEVOPS LEAD",
    image: "/2025/Nishanth.jpg",
  },
  {
    name: "Dhruv Bhola",
    role: "ASSISTANT RESEARCH LEAD",
    image: "/2025/Dhruv Bhola.jpg",
  },
  {
    name: "Utkarsh Soni",
    role: "EVENT MANAGEMENT TEAM",
    image: "/2025/Copy of UTKARSH SONI_.png",
  },
  {
    name: "Nishant Yadav",
    role: "EVENT MANAGEMENT TEAM",
    image: "/2025/Nishant Yadav.png",
  },
  {
    name: "Garvit Yadav",
    role: "EVENT MANAGEMENT TEAM",
    image: "/2025/Garvit Yadav.jpg",
  },
  {
    name: "Atharv Agrawal",
    role: "PR & OUTREACH TEAM",
    image: "/2025/Atharv Agrawal.jpg",
  },
  {
    name: "Rohit Malviya",
    role: "PR & OUTREACH TEAM",
    image: "/2025/Rohit Malviya.jpg",
  },
  {
    name: "Shreay Agarwal",
    role: "PR & OUTREACH TEAM",
    image: "/2025/Shreay Agrawal.JPG",
  },
  {
    name: "Vibhu Roy",
    role: "SOCIAL MEDIA TEAM",
    image: "/2025/Shubhojeet Roy.JPG",
  },
  {
    name: "Aman Sharma",
    role: "SOCIAL MEDIA TEAM",
    image: "/2025/Aman Sharma.jpg",
  },
  {
    name: "Mrigneeta Verma",
    role: "SOCIAL MEDIA TEAM",
    image: "/2025/Mrigneeta Verma.png",
  },
  {
    name: "Rohit",
    role: "VIDEO EDITOR",
    image: "/2025/ROHIT MEENA.jpg",
  },
  {
    name: "Jayashis Barua",
    role: "GRAPHIC DESIGNER",
    image: "/2025/Jayashis Barua.jpeg",
  },
];

export const TeamSection = () => {
  return (
    <section className="text-center py-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Meet Our <span className="text-blue-500">Team 2025-26</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[200px] md:w-[180px] flex flex-col items-center group cursor-pointer"
          >
            <div className="rounded-xl border-2 border-cyan-400 overflow-hidden w-full aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105 active:scale-100">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm font-medium transition-colors duration-300 group-hover:text-cyan-400">
              {member.name}
            </p>
            <p className="text-xs text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mt-24 mb-12">
        Assistant <span className="text-blue-500">Team Leads 2025-26</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto">
        {assistantMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[200px] md:w-[180px] flex flex-col items-center group cursor-pointer"
            onClick={() => {
              if (member.linkdin) {
                window.open(member.linkdin, "_blank");
              }
            }}
          >
            <div className="rounded-xl border-2 border-cyan-400 overflow-hidden w-full aspect-[3/4] transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm font-medium transition-colors duration-300 group-hover:text-cyan-400">
              {member.name}
            </p>
            <p className="text-xs text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
