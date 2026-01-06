"use client";

import { useState, useEffect, createContext, useContext } from "react";

interface ImagePreloaderContextType {
  isLoaded: boolean;
}

const ImagePreloaderContext = createContext<ImagePreloaderContextType>({
  isLoaded: false,
});

export function useImagePreloader() {
  return useContext(ImagePreloaderContext);
}

interface ImagePreloaderProps {
  images: string[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
  timeout?: number;
}

/**
 * Preloads all specified images before rendering children.
 * Shows a loading state until all images are ready, preventing pop-in.
 */
export function ImagePreloader({
  images,
  children,
  fallback,
  timeout = 5000,
}: ImagePreloaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      setIsLoaded(true);
      return;
    }

    let loadedCount = 0;
    let timedOut = false;

    const timeoutId = setTimeout(() => {
      timedOut = true;
      setIsLoaded(true);
    }, timeout);

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Don't block on failed images
        img.src = src;
      });
    };

    const loadImages = async () => {
      const promises = images.map(async (src) => {
        await preloadImage(src);
        if (!timedOut) {
          loadedCount++;
          setProgress(Math.round((loadedCount / images.length) * 100));
        }
      });

      await Promise.all(promises);

      if (!timedOut) {
        clearTimeout(timeoutId);
        setIsLoaded(true);
      }
    };

    loadImages();

    return () => clearTimeout(timeoutId);
  }, [images, timeout]);

  const defaultFallback = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">Loading... {progress}%</p>
      </div>
    </div>
  );

  if (!isLoaded) {
    return <>{fallback || defaultFallback}</>;
  }

  return (
    <ImagePreloaderContext.Provider value={{ isLoaded }}>
      <div className="animate-in fade-in duration-300">{children}</div>
    </ImagePreloaderContext.Provider>
  );
}
