import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionsInView({ sectionName, threshold = 0.7 }) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection({ sectionName });
    }
  }, [inView, setActiveSection, sectionName]);

  return { ref };
}
