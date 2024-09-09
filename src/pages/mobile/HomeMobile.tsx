import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { buttonStyles } from "./styles/buttonStyles";

import { Botones } from "./constants/navButtons";

export default function HomeMobile() {
  return (
    <Flex
      bg="gray.100"
      h="calc(80vh - 60px)"
      w="auto"
      color="white"
      m={5}
      alignItems={"center"}
      justifyContent={"space-around"}
      borderRadius={"20px"}
      border={"1.5px solid black"}
      flexDir={"column"}
    >
      {Botones.map((b) => (
        <Link key={b.name} to={b.path}>
          <Button {...buttonStyles}>{b.name}</Button>
        </Link>
      ))}
    </Flex>
  );
}
