import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Flex,
} from "@chakra-ui/react";

import MenuIcon from "./assets/icons/MenuList.svg";

import { Botones } from "../constants/navButtons";
import { Link } from "react-router-dom";

function HamburgerMenuMobile() {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="outline"
          icon={<Image src={MenuIcon} alt={"Menu-List"} />}
        />
        <MenuList border={"1px solid black"} borderRadius={"15px"} mt={3} p={1}>
          <Flex
            direction={"column"}
            align={"center"}
            justify={"center"}
            height={"100%"}
          >
            {Botones.map((b) => (
              <Link to={b.path} key={b.name}>
                <MenuItem _hover={{ bg: "gray.100" }}>{b.name}</MenuItem>
              </Link>
            ))}
          </Flex>
        </MenuList>
      </Menu>
    </>
  );
}

export default HamburgerMenuMobile;
