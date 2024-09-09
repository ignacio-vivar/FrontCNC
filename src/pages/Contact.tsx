import { useLayout } from "../hooks/useLayout";
import ContactMobile from "./mobile/ContactMobile";

function Contact() {
  const { isMobile } = useLayout();
  return <>{isMobile ? <ContactMobile /> : <p>ContactDesktop</p>}</>;
}

export default Contact;
