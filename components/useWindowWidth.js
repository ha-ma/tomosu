import { useCallback, useEffect, useState } from "react";

export const useWindowWidth = () => {
  const isClient = typeof window === "object";
  const getWindowWidth = useCallback(() => {
    return isClient ? window?.innerWidth : 0;
  }, [isClient]);
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  useEffect(() => {
    const onResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getWindowWidth]);
  return windowWidth;
};
