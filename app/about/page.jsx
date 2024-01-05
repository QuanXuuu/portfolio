"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const about = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default about;
