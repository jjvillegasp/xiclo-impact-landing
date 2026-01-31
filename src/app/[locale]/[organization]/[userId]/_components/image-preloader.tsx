"use client";

import { useEffect } from "react";

const ImagePreloader = () => {
  useEffect(() => {
    const preloadImages = [
      '/assets/images/header.png',
      '/assets/images/xiclo-food.jpg'
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
};

export default ImagePreloader;