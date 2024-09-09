import { useLayout } from "../hooks/useLayout";
import HomeDesktop from "./desktop/HomeDesktop";
import MaterialMobile from "./mobile/MaterialMobile";

function Material() {
  const { isMobile } = useLayout();
  return <>{isMobile ? <MaterialMobile /> : <HomeDesktop />}</>;
}

export default Material;
