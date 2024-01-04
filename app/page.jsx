"use client";

import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Navbar />
      {/* <Hero
        heading="Quan Xu"
        subHeading="Web Developer"
        message="I am a frontend developer from Krempe, Germany."
      /> */}
    </div>
  );
}
