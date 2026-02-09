import { projects } from "@/data";
import { HeroText, SectionTitle, BodyText } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { FaCalendar, FaMapPin, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

// Helper to find event by ID
const getEvent = (id: string) => {
    return projects.find((p) => p.id === parseInt(id));
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default function EventPage({ params }: { params: { id: string } }) {
    const event = getEvent(params.id);

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black-100 text-white pt-32 pb-20 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-azure/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <Link href="/#events" className="inline-flex items-center text-white/50 hover:text-white mb-8 transition-colors">
                    <FaArrowLeft className="mr-2" /> Back to Events
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Content Side */}
                    <div>
                        <HeroText className="text-5xl md:text-7xl mb-6">{event.title}</HeroText>
                        
                        <div className="flex flex-wrap gap-6 mb-8 text-white/70">
                            {/* Placeholder for date/location if not in data object, using static or random for now as data/events.ts structure wasn't fully inspected for these fields */}
                             <div className="flex items-center gap-2">
                                <FaCalendar className="text-azure-400" />
                                <span>TBA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapPin className="text-azure-400" />
                                <span>IIIT Bhopal</span>
                            </div>
                        </div>

                        <BodyText className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
                            {event.details}
                        </BodyText>

                        {/* 
                        <div className="flex gap-4">
                            <Button variant="primary">Register Now</Button>
                        </div> 
                        */}
                    </div>

                    {/* Image Side */}
                    <div className="relative aspect-video lg:aspect-square w-full rounded-none overflow-hidden border border-white/10 group">
                         {/* Image */}
                         <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                            <img 
                                src={event.img} 
                                alt={event.title} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                            />
                         </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
