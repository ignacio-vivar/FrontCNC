import { useLayout } from "../hooks/useLayout";
import DesktopLayout from "./desktop/DesktopLayout";
import MobileLayout from "./mobile/MobileLayout/";

function Layout() {
  const { isMobile, isPortrait } = useLayout();

  return (
    <>
      {isMobile ? (
        isPortrait ? (
          <MobileLayout />
        ) : (
          <DesktopLayout />
        )
      ) : (
        <DesktopLayout />
      )}
    </>
  );
}

export default Layout;
