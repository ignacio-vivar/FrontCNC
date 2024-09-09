import { Box, Flex, Image } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import Home from "./assets/icons/Home.svg";
import Lista from "./assets/icons/Lista.svg";
import Logo from "./assets/logo/Logo.svg";
import HamburgerMenuMobile from "./HamburgerMenuMobile";
import { iconsStyles } from "../styles/iconsStyles";
import Footer from "./Footer";

function MobileLayout() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      bg="white"
      justifyContent={"space-evenly"}
    >
      <Box bg="white" w="100%" py={2} px={2}>
        <Flex justifyContent={"space-between"}>
          <Box p={1}>
            <Image src={Logo} alt={"Logo CNC"} w="135px" h="70px" />
          </Box>

          <Box
            ml={0}
            p={0}
            border={"1px solid black"}
            borderRadius={"15px"}
            justifyContent="space-evenly"
            alignContent="center"
          >
            <Flex p={1}>
              <Link to={"/"}>
                <Image src={Home} alt={"Icono Home"} {...iconsStyles} />
              </Link>
              <Link to={"tps"}>
                <Image src={Lista} alt={"Icono Lista"} {...iconsStyles} />
              </Link>
              <HamburgerMenuMobile />
            </Flex>
          </Box>
        </Flex>
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
}

export default MobileLayout;
