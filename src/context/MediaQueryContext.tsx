import React, { createContext, ReactNode } from "react";
import { useMediaQuery } from "@/hook/useMediaQuery";

export const MediaQueryContext = createContext<boolean | null>(null);

export const MediaQueryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return <MediaQueryContext.Provider value={isMobile}>{children}</MediaQueryContext.Provider>;
};
