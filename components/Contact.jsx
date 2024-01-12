"use client";

import React, { useEffect } from "react";
import ContactItem from "./ContactItem";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
// import { useSectionsInView } from "@/lib/hooks";

const Contact = () => {
  // const { ref } = useSectionsInView("Contact");

  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="contact" className="w-full p-2 mb-60">
      <div className="max-w-[1240px] mx-auto">
        <p className="uppercase font-bold text-2xl tracking-widest text-primary-light dark:text-primary mb-6">
          Contact
        </p>

        <div className="flex flex-col items-start justify-center">
          <ContactItem
            contactUrl="https://www.linkedin.com/in/quanxuuu"
            contactIcon={<FaLinkedinIn />}
            contactName="quanxuuu"
          />

          <ContactItem
            contactUrl="https://github.com/quanxuuu"
            contactIcon={<FaGithub />}
            contactName="quanxuuu"
          />

          <ContactItem
            contactUrl="mailto:xuquan69220@gmail.com"
            contactIcon={<MdOutlineMarkEmailUnread />}
            contactName="xuquan69220@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
