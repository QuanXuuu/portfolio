"use client";

import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";

import React, { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("testtest");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div id="home" className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <Hero
          heading="Quan Xu"
          subHeading="Web Developer"
          message="I am frontend developer from Krempe, Germany."
        />
      </div>
    </div>
  );
}
