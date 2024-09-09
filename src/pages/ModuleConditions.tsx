import { useLayout } from "../hooks/useLayout";
import HomeDesktop from "./desktop/HomeDesktop";
import ConditionsMobile from "./mobile/ConditionsMobile";

type Props = {};

function ModuleConditions({}: Props) {
  const { isMobile } = useLayout();
  return <>{isMobile ? <ConditionsMobile /> : <HomeDesktop />}</>;
}

export default ModuleConditions;
