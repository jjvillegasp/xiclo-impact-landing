/**
 * Utility functions for browser detection
 * These functions should ONLY be used on the client side
 */

/**
 * Detects if the current browser is Safari
 * @returns boolean indicating if the browser is Safari
 */
export const isSafari = (): boolean => {
  if (typeof navigator === "undefined") return false;

  return (
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  );
};

/**
 * Detects if the current device is iOS
 * @returns boolean indicating if the device is iOS
 */
export const isIOS = (): boolean => {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * Detects if the current device is mobile
 * @returns boolean indicating if the device is mobile
 */
export const isMobile = (): boolean => {
  if (typeof navigator === "undefined") return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
