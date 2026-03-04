import { useEffect, useRef, useState } from "react";

export const useRevealAnimation = (isOpen = true, once = true) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  // scroll trigger
  useEffect(() => {
    if (!ref.current || !isOpen) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          if (once) obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [isOpen, once]);

  // collapse/expand trigger
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setStart(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setStart(false);
    }
  }, [isOpen]);

  return { ref, start };
};