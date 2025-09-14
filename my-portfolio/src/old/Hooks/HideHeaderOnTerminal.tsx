import { useState, useRef, useEffect } from "react";

export function useHideHeaderOnSection(threshold = 0.5) {
  const [showHeader, setShowHeader] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowHeader(false); // hide header
          } else {
            setShowHeader(true); // show header
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  return { showHeader, sectionRef };
}
