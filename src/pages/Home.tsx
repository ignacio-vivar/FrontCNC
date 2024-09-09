import { useLayout } from "../hooks/useLayout";
import HomeDesktop from "./desktop/HomeDesktop";
import HomeMobile from "./mobile/HomeMobile";

function Home() {
  const { isMobile } = useLayout();

  return <>{isMobile ? <HomeMobile /> : <HomeDesktop />}</>;
}

export default Home;
