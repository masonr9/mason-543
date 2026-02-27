"use client";
import React from "react";
import Link from 'next/link';
// https://mui.com/material-ui/react-menu/ -- HOW TO USE MUI MENU COMPONENT --

const Header: React.FC = () => {
  return (
    <nav className="bg-fuchsia-400 px-10 py-8">
      <ul className="items-center flex gap-6 justify-center">
        <li className="bg-fuchsia-900 p-5">
          <Link href="/"> Home</Link>
        </li>
        <li className="bg-fuchsia-900 p-5">
          <Link href="/about"> About</Link>
        </li>
        <li className="bg-fuchsia-900 p-5">
          <Link href="/contact"> Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Header;