import { useLayout } from "../hooks/useLayout";
import DesktopSSCNC from "./desktop/DesktopSSCNC";
import SSCNCMobile from "./mobile/SSCNCMobile";

type Props = {};

function SSCNC({}: Props) {
  const { isMobile } = useLayout();
  return <>{isMobile ? <SSCNCMobile /> : <DesktopSSCNC />}</>;
}

export default SSCNC;
