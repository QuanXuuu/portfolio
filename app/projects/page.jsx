"use client";

import React, { useState } from "react";
import Hero from "../../components/Hero";
import Navbar from "@/components/Navbar";

function projects() {
  return (
    <div>
      <Navbar />
      <Hero heading="My Projects" />
    </div>
  );
}

export default projects;
