import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [isMatching, setIsMatching] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setIsMatching(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setIsMatching(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return isMatching;
};
