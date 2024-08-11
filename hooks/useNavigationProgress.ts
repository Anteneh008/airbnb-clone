"use client";

import { useEffect } from "react";
import ProgressBar from "@badrap/bar-of-progress";
import { usePathname } from "next/navigation";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

const useNavigationProgress = () => {
  const pathname = usePathname(); //provides the current pathname

  useEffect(() => {
    progress.start();

    // Simulate navigation completion after a short delay
    const timer = setTimeout(() => {
      progress.finish();
    }, 1000); // Adjust this duration as needed

    // Cleanup progress bar if the effect is cleaned up
    return () => {
      clearTimeout(timer);
      progress.finish();
    };
  }, [pathname]);
};

export default useNavigationProgress;
