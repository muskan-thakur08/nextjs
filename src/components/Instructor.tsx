"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { AnimatedTooltip } from "./ui/animated-tooltip";
export default function Instructor() {

    const instructors = [
        {
            id: 1,
            name: 'Elena Briggs',
            designation: 'Vocal Coach',
            image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            name: 'Marcus Reid',
            designation: 'Guitar Instructor',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
        },
        {
            id: 3,
            name: 'Julia Zhang',
            designation: 'Piano Teacher',
            image:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 4,
            name: 'Andre Gomez',
            designation: 'Drumming Expert',
            image:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
    ];


    return (
        <div className="h-[40rem] flex items-center justify-center overflow-hidden">
            <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-3xl  mx-auto p-4">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-8 tracking-wide">Meet Our Instructor</h2>
                    <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
                    <BackgroundBeams />
                    <div className="flex flex-row items-center justify-center mb-10 mt-10 w-full">
                        <AnimatedTooltip items={instructors} />
                    </div>
                </div>
            </div>
        </div>
    )
}