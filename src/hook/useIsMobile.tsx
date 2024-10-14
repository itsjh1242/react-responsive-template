import { useContext } from "react";
import { MediaQueryContext } from "@/context/MediaQueryContext";

export const useIsMobile = (): boolean => {
  const isMobile = useContext(MediaQueryContext);

  if (isMobile === null) {
    throw new Error("useIsMobile must be used within a MediaQueryProvider");
  }

  return isMobile;
};
