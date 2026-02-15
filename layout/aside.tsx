'use client';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const Aside: React.FC = () => {
    return (
        <aside className="bg-cyan-500 text-white p-10 flex flex-col items-center justify-center min-h-[420px]">
            <p>Side bar section</p>
            <FaArrowRightLong size={90} color="#6fd3f4" className="pr-4"></FaArrowRightLong>
        </aside>
    );
};
export default Aside;