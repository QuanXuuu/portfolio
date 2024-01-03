"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const about = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="About Me" />
    </div>
  );
};

export default about;
