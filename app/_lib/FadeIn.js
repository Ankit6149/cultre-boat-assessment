"use client";

import { useRef, useEffect, useState } from "react";
function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  const classMap = {
    up: "fade-up-lux",
    left: "fade-left-lux",
    right: "fade-right-lux",
  };

  return (
    <div ref={ref} className={`${classMap[direction]} ${show ? "show" : ""}`}>
      {children}
    </div>
  );
}

export default FadeIn;
