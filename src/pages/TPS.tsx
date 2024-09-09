import { useLayout } from "../hooks/useLayout";
import DesktopTPS from "./desktop/DesktopTPS";
import TpsMobile from "./mobile/TpsMobile";

function TPS() {
  const { isMobile } = useLayout();
  return <>{isMobile ? <TpsMobile /> : <DesktopTPS />}</>;
}

export default TPS;
