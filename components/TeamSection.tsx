"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Ankit Kaushik",
    role: "CORDINATOR",
    image: "/ankit.png",
  },
  {
    name: "Jitesh Shewaramani",
    role: "CO-CORDINATOR",
    image: "/jitesh.png",
  },
  {
    name: "Yuvraj Singh Gour",
    role: "LEAD EXECUTIVE",
    image: "/yuvraj.png",
  },
  {
    name: "Ronak Nayak",
    role: "WEB DEV LEAD",
    image: "/ronak.png",
  },
  {
    name: "Anuj Vishwakarma",
    role: "APP DEV LEAD",
    image: "/anuj.png",
  },
  {
    name: "Pritam Goyal",
    role: "DATA SCIENCE LEAD",
    image: "/pritam.png",
  },
  {
    name: "Pratham Upadhyay",
    role: "AI/ML LEAD",
    image: "/pratham.png",
  },
  {
    name: "Somil Rathore",
    role: "CLOUD LEAD",
    image: "/somil.png",
  },
  {
    name: "Himank Shrimal",
    role: "VLSI LEAD",
    image: "/himank.png",
  },
  {
    name: "Ajinkya Lakhara",
    role: "MANAGEMENT LEAD",
    image: "/ajinkya.png",
  },
  {
    name: "Kunal Karole",
    role: "SOCIAL MEDIA LEAD",
    image: "/kunal.png",
  },
  {
    name: "Mohd Faraz Siddiqui",
    role: "AI/ML RESEARCH LEAD",
    image: "/mohd.png",
  },
  {
    name: "Suyash Pradeep Patil",
    role: "DATA SCIENCE RESEARCH LEAD",
    image: "/suyash.png",
  },
  {
    name: "Suraj Mishra",
    role: "WEB DEV LEAD",
    image: "/suraj.png",
  },
  {
    name: "Abhishek Patel",
    role: "PR/OUTREACH LEAD",
    image: "/abhishek.png",
  },
];

const assistantMembers = [
  {
    name: "Shashank Agrawal",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/ShashankAgarwal.webp",
  },
  {
    name: "Arpit Chauhan",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/arpit.png",
  },
  {
    name: "Aryan Wattamwar",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/aryan.jpg",
  },
  {
    name: "Mayank Kumar Verma",
    role: "ASSISTANT WEB DEVELOPER",
    image: "/mayank.jpg",
  },
  {
    name: "Krish Chordiya",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/krishc.jpg",
  },
  {
    name: "Kanishk Mishra",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/kanishk.jpg",
  },
  {
    name: "Puneet Waswani",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/puneet.jpg",
  },
  {
    name: "Deepak kumar",
    role: "ASSISTANT AI/ML DEVELOPER",
    image: "/deepak.jpg",
  },
  {
    name: "Krish Rathi",
    role: "GRAPHIC DESIGNER",
    image: "/krishr.jpg",
  },
  {
    name: "Almaaz Abbas Rizvi",
    role: "GRAPHIC DESIGNER",
    image: "/almaas.jpg",
  },
  {
    name: "Apoorva Bhajpai",
    role: "ASSISTANT APP DEVELOPER",
    image: "/apoorva.png",
  },
  {
    name: "Akshit Pahade",
    role: "ASSISTANT APP DEVELOPER",
    image: "/akshit.jpg",
  },
  {
    name: "Dhruv Sarin",
    role: "ASSISTANT DATA SCIENTIST",
    image: "/dhruv.jpg",
  },
  {
    name: "Tejasri Pendota",
    role: "ASSISTANT DATA SCIENTIST",
    image: "/tejasri.jpg",
  },
  {
    name: "Dhruvi Sharma",
    role: "ASSISTANT DATA SCIENTIST",
    image: "/dhruvi.png",
  },
  {
    name: "Harsh Goyal",
    role: "ASSISTANT VLSI LEAD",
    image: "/harsh.jpg",
  },
  {
    name: "Jatin Wadhwani",
    role: "ASSISTANT CLOUD DEVELOPER",
    image: "/Jatin.jpg",
  },
  {
    name: "Ashmit Rajput",
    role: "ASSISTANT CLOUD DEVELOPER",
    image: "/ashmit.jpg",
  },
  {
    name: "Vansh Tambi",
    role: "ASST. SOCIAL MEDIA MANAGER",
    image: "/vansh.jpg",
  },
  {
    name: "Kshitij Nigam",
    role: "ASST. SOCIAL MEDIA MANAGER",
    image: "/kshitij.jpg",
  },
  {
    name: "Shivam Jawaliya",
    role: "PR & OUTREACH TEAM ASST.",
    image: "/shivam.jpg",
  },
  {
    name: "Umesh Kumar",
    role: "PR & OUTREACH TEAM ASST.",
    image: "/umesh.jpg",
  },
  {
    name: "Manish Kumar",
    role: "MANANGEMENT TEAM ASST.",
    image: "/manish.png",
  },
  {
    name: "Akash Singh Lalla",
    role: "MANANGEMENT TEAM ASST.",
    image: "/akash.webp",
  },
  {
    name: "Deepanshu Rajput",
    role: "ASST. EXECUTIVE",
    image: "/deepanshu.jpg",
  },
];

export const TeamSection = () => {
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const teamGridRef = useRef<HTMLDivElement>(null);
  const assistantGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // First heading animation
      gsap.from(heading1Ref.current, {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading1Ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Team members staggered entrance
      const teamCards = teamGridRef.current?.querySelectorAll(".team-member");
      if (teamCards) {
        gsap.from(teamCards, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamGridRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });

        // Add hover animations
        teamCards.forEach((card) => {
          const element = card as HTMLElement;
          const image = element.querySelector(".member-image");
          
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -12,
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1.1,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          });
        });
      }

      // Second heading animation
      gsap.from(heading2Ref.current, {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading2Ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Assistant members staggered entrance
      const assistantCards = assistantGridRef.current?.querySelectorAll(".team-member");
      if (assistantCards) {
        gsap.from(assistantCards, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: assistantGridRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });

        // Add hover animations
        assistantCards.forEach((card) => {
          const element = card as HTMLElement;
          const image = element.querySelector(".member-image");
          
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              y: -12,
              scale: 1.05,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1.1,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            }
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="text-center py-20 bg-black text-white">
      <h2
        ref={heading1Ref}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Meet Our <span className="text-blue-500">Team 2024-25</span>
      </h2>
      <div
        ref={teamGridRef}
        className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto"
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[150px] md:w-[180px] flex flex-col items-center team-member"
          >
            <div className="rounded-xl border-2 border-cyan-400 overflow-hidden w-full aspect-[3/4] member-image">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-sm font-medium">{member.name}</p>
            <p className="text-xs text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>

      <h2
        ref={heading2Ref}
        className="text-3xl md:text-4xl font-bold mt-24 mb-12"
      >
        Assistant <span className="text-blue-500">Team Leads 2024-25</span>
      </h2>
      <div
        ref={assistantGridRef}
        className="flex flex-wrap justify-center gap-10 px-6 max-w-7xl mx-auto"
      >
        {assistantMembers.map((member, idx) => (
          <div
            key={idx}
            className="w-[150px] md:w-[180px] flex flex-col items-center team-member"
          >
            <div className="rounded-xl border-2 border-cyan-400 overflow-hidden w-full aspect-[3/4] member-image">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-3 text-sm font-medium">{member.name}</p>
            <p className="text-xs text-gray-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
