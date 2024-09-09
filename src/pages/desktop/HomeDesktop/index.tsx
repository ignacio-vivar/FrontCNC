import { Flex } from "@chakra-ui/react";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";

function HomeDesktop() {
  return (
    <Flex mt={5} justifyContent={"space-around"} alignItems={"center"}>
      <LeftHome />
      <RightHome />
    </Flex>
  );
}

export default HomeDesktop;
