import { useLayout } from "../hooks/useLayout";
import DesktopVideos from "./desktop/DesktopVideos";
import VideosMobile from "./mobile/VideosMobile";

type Props = {};

function Videos({}: Props) {
  const { isMobile } = useLayout();
  return <>{isMobile ? <VideosMobile /> : <DesktopVideos />}</>;
}

export default Videos;
