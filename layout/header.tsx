'use client';
import { pink } from '@mui/material/colors';
import React from 'react';
import { FaApple } from "react-icons/fa6";
const Header: React.FC = () => {
    return (
        <header 
            className="bg-fuchsia-700 text-white p-10 flex items-center justify-center"
        >
            <FaApple size={90} color="#f46fe0" className="pr-4"></FaApple>
            <h1 
                className="text-3xl font-semibold pr-4"
            >My Application Header</h1>
            <nav className="bg-fuchsia-400 px-10 py-8">
                <ul className="items-center flex gap-6 justify-center">
                    <li className="bg-fuchsia-900 p-5">
                        Home
                    </li>
                    <li className="bg-fuchsia-900 p-5">
                        About
                    </li>
                    <li className="bg-fuchsia-900 p-5">
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;