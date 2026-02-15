'use client';
import React from 'react';
import Intro from "@/components/intro";
const Section: React.FC = () => {
    return (
        <section className="bg-yellow-400 text-white p-10 flex items-center justify-center min-h-[180px]">
            <Intro />
        </section>
    );
};
export default Section;