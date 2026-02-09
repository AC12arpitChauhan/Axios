"use client";
import { fullTeam, coreTeam } from "@/data/team";
import { Section } from "@/components/Section";
import { HeroText, SectionTitle } from "@/components/ui/Typography";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const TeamMemberCard = ({ member, isCore = false }: { member: any, isCore?: boolean }) => (
    <div className={`group relative overflow-hidden bg-white/5 border border-white/10 ${isCore ? 'aspect-[3/4]' : 'aspect-square'} transition-all duration-300 hover:border-azure/50`}>
        {/* Grayscale to Color hover effect */}
        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500">
             {/* Using a placeholder if img is just a path string */}
            <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20">
                 {/* In real implementaiton, use Next/Image with valid src */}
                 {member.img && member.img.startsWith('/') ? (
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                 ) : (
                    <span className="text-4xl">?</span>
                 )}
            </div>
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className={`font-bold text-white leading-tight ${isCore ? 'text-2xl' : 'text-lg'}`}>{member.name}</h3>
            <p className="text-azure-400 font-mono text-xs uppercase tracking-wider mt-1">{member.role}</p>
            
            <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <a href={member.link} target="_blank" className="text-white hover:text-azure transition-colors"><FaTwitter /></a>
                <a href="#" className="text-white hover:text-azure transition-colors"><FaLinkedin /></a>
            </div>
        </div>
    </div>
)

export default function TeamPage() {
    // Separate core and extended (using slicing or specific data if I had it distinct in data/team.ts)
    // For now using the exported arrays
    const extendedTeam = fullTeam.filter(m => !coreTeam.find(c => c.id === m.id));

  return (
    <main className="min-h-screen bg-black-100 pt-36 pb-20">
        <Section>
            <div className="mb-20">
                <p className="text-azure-400 font-mono text-sm tracking-[0.2em] mb-6 uppercase">
                    The Minds Behind The Machine
                </p>
                <HeroText>
                    MEET THE <br/> <span className="text-white/50">COLLECTIVE</span>
                </HeroText>
            </div>

            {/* Core Team */}
            <div className="mb-32">
                <SectionTitle className="mb-12">Core Team</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreTeam.map((member) => (
                        <TeamMemberCard key={member.id} member={member} isCore={true} />
                    ))}
                </div>
            </div>

            {/* Full Roster */}
            <div>
                 <SectionTitle className="mb-12">Executive Members</SectionTitle>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {extendedTeam.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                 </div>
            </div>
        </Section>
    </main>
  );
}
