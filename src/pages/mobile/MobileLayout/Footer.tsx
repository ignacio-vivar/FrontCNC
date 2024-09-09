import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Link to="/contact">
      <Box as="footer" py={2} textAlign="center" borderTopWidth="1px">
        <Text textAlign={"right"} fontStyle={"italic"} color={"gray.600"}>
          Creado por Juan José Ignacio Vivar Cruz
        </Text>
      </Box>
    </Link>
  );
}

export default Footer;
