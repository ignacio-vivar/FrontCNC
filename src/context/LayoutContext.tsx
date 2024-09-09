import React, { createContext, useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";

interface LayoutContextProps {
  isMobile: boolean;
  isPortrait: boolean;
}

export const LayoutContext = createContext<LayoutContextProps | undefined>(
  undefined
);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  const [isMobileQuery] = useMediaQuery("(max-width: 768px)");
  const [isPortraitQuery] = useMediaQuery("(orientation: portrait)");

  useEffect(() => {
    setIsMobile(isMobileQuery);
    setIsPortrait(isPortraitQuery);
  }, [isMobileQuery, isPortraitQuery]);

  return (
    <LayoutContext.Provider value={{ isMobile, isPortrait }}>
      {children}
    </LayoutContext.Provider>
  );
};
