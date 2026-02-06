'use client';
import React from 'react';
const Header: React.FC = () => {
    return (
        <header 
            className="bg-fuchsia-700 text-white p-10 flex items-center justify-center"
        >
            <h1 
                className="text-3xl font-semibold"
            >My Application Header</h1>
        </header>
    );
};
export default Header;