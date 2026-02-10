"use client";
import { coreTeam, leads, assistantWebDev, assistantAppDev, assistantGameDev, assistantGenAI, assistantDataScience, assistantAIML, assistantDevOps, assistantResearch, eventManagementTeam, prOutreachTeam, socialMediaTeam, creativeTeam } from "@/data/team";
import { Section } from "@/components/Section";
import { HeroText, SectionTitle } from "@/components/ui/Typography";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const TeamMemberCard = ({ member, isCore = false }: { member: any, isCore?: boolean }) => (
    <div className={`group relative overflow-hidden bg-white/5 border border-white/10 ${isCore ? 'aspect-[3/4]' : 'aspect-square'} transition-all duration-300 hover:border-azure/50`}>
        {/* Grayscale to Color hover effect */}
        <div className="absolute inset-0 transition-all duration-500">
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


  return (
    <main className="min-h-screen bg-black-100 pt-36 pb-20">
        <Section>
            <div className="mb-20 pb-40">
                <p className="text-azure-400 font-mono text-sm tracking-[0.2em] mb-6 uppercase">
                    The Minds Behind The Machine
                </p>
                <HeroText>
                    MEET THE <br/> <span className="text-white/50">COLLECTIVE</span>
                </HeroText>
            </div>

            {/* Core Team */}
            <div className="mb-20">
                <SectionTitle className="mb-12">Core Team</SectionTitle>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {coreTeam.map((member, index) => (
                        <div key={member.id} className={`w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] ${index === 1 ? 'scale-110 z-10' : ''} transition-transform duration-300`}>
                            <TeamMemberCard member={member} isCore={true} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Leads */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {leads.map((member) => (
                        <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* Web Dev Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant Web Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantWebDev.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* App Dev Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant App Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantAppDev.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* Game Dev Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant Game Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantGameDev.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* GenAI Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant GenAI Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantGenAI.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* Data Science Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant Data Science Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantDataScience.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* AI/ML Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant AI/ML Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantAIML.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* DevOps Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant DevOps Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantDevOps.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* Research Assistants */}
            <div className="mb-20">
                 <SectionTitle className="mb-12">Assistant Research Leads</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {assistantResearch.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

             {/* Event Management Team */}
             <div className="mb-20">
                 <SectionTitle className="mb-12">Event Management Team</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {eventManagementTeam.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

            {/* PR & Outreach Team */}
             <div className="mb-20">
                 <SectionTitle className="mb-12">PR & Outreach Team</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {prOutreachTeam.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

             {/* Social Media Team */}
             <div className="mb-20">
                 <SectionTitle className="mb-12">Social Media Team</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {socialMediaTeam.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>

             {/* Creative Team */}
             <div className="mb-20">
                 <SectionTitle className="mb-12">Creative Team</SectionTitle>
                 <div className="flex flex-wrap justify-start gap-6">
                    {creativeTeam.map((member) => (
                         <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-19.2px)]">
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                 </div>
            </div>
        </Section>
    </main>
  );
}
