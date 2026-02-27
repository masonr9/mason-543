'use client';
import { pink } from '@mui/material/colors';
import React from 'react';
import { FaApple } from "react-icons/fa6";
import Nav from './nav';

const Header: React.FC = () => {
    return (
        <header 
            className="bg-fuchsia-700 text-white p-10 flex items-center justify-center"
        >
            <FaApple size={90} color="#f46fe0" className="pr-4"></FaApple>
            <h1 
                className="text-3xl font-semibold pr-4"
            >My Application Header</h1>
            <Nav />
        </header>
    );
};
export default Header;