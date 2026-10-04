"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage =
        (scrollTop / documentHeight) * 100;

      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-white/10">
      <div
        className="h-full bg-[#d9a441] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}