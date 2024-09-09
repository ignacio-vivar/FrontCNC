import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./assets/logos/Logo.svg";

type LinkButtons = {
  children: React.ReactNode;
  link: string;
};

// const Links = ["Principal", "TP's", "SSCNC", "Videos"];
const Links = [
  { name: "Principal", route: "/" },
  { name: "TP's", route: "/tps" },
  { name: "SSCNC", route: "/sscnc" },
  { name: "Videos", route: "/videos" },
];
const styleGradient =
  "linear(black 0%, #B02C28 50%, #D7342C 75%, #FF3B30 100%)";

const NavLink = (props: LinkButtons) => {
  const { children, link } = props;
  return (
    <Link to={link}>
      <Box
        px={5}
        py={3}
        rounded={"md"}
        borderRadius={"15px"}
        border={"2px solid black"}
        _hover={{
          textDecoration: "none",
          boxShadow: "1px 3px 3px red",
        }}
        bgClip="text"
        backgroundImage={styleGradient}
        fontWeight={"bold"}
      >
        {children}
      </Box>
    </Link>
  );
};

export default function DesktopLayout() {
  return (
    <>
      <Box borderBottom={"1px solid black"} px={4}>
        <Flex h={"80px"} alignItems={"start"} justifyContent={"start"} mt={2}>
          <HStack spacing={8} alignItems={"center"}>
            <Box ml={"5"}>
              <Image w={"125px"} h={"75px"} src={Logo} alt="LogoCNC" />
            </Box>
            <HStack as={"nav"} spacing={4} position={"absolute"} right={10}>
              {Links.map((link) => (
                <NavLink key={link.name} link={link.route}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
}
