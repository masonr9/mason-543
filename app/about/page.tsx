"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

const About: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="font-bold">About Page</h1>
        <Image
          src="/Unofficial_JavaScript_logo_2.svg.png"
          alt="JavaScript Logo"
          width={500}
          height={300}
        />
        <p className="mt-4 text-lg">
          Welcome to the about page of my app.
        </p>
      </main>
    </div>
  );
};
export default About;