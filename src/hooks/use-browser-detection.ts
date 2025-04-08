"use client";

import { isIOS, isMobile, isSafari } from "@/utils/browser-detection";
import useWindowSize from "@rooks/use-window-size";
import { useEffect, useState } from "react";

interface BrowserInfo {
  isSafari: boolean;
  isIOS: boolean;
  isMobile: boolean;
  userAgent: string;
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  isLargeScreen: boolean;
}

/**
 * Hook for detecting browser information
 * This hook should ONLY be used in client components
 */
export function useBrowserDetection(): BrowserInfo {
  const { innerWidth } = useWindowSize();

  // Initialize with default values
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    isSafari: false,
    isIOS: false,
    isMobile: false,
    userAgent: "",
    isSmallScreen: false,
    isMediumScreen: false,
    isLargeScreen: false,
  });

  useEffect(() => {
    // Only run in the browser
    if (typeof window !== "undefined") {
      const width = innerWidth || window.innerWidth;

      setBrowserInfo({
        isSafari: isSafari(),
        isIOS: isIOS(),
        isMobile: isMobile(),
        userAgent: navigator.userAgent,
        isSmallScreen: width < 768,
        isMediumScreen: width >= 768 && width < 1024,
        isLargeScreen: width >= 1024,
      });
    }
  }, []);

  return browserInfo;
}
