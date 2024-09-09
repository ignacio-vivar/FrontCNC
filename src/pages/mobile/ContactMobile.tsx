import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

function ContactMobile() {
  return (
    <>
      <Flex
        m="5"
        h="calc(80vh - 60px)"
        flexDirection={"column"}
        alignItems={"stretch"}
        justifyContent={"space-evenly"}
        alignContent={"stretch"}
      >
        <Card>
          <CardHeader>
            <Heading size="md">Datos</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs">Profesor</Heading>
                <Text pt="2" fontSize="sm">
                  Juan José Ignacio Vivar Cruz
                </Text>
              </Box>
              <Box>
                <Heading size="xs">E-Mail</Heading>
                <Text pt="2" fontSize="sm">
                  ignacio.vivar.cruz@gmail.com
                </Text>
              </Box>
              <Box>
                <Heading size="xs">Creación de la Web</Heading>
                <Text pt="2" fontSize="sm">
                  Año : 2024
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
}

export default ContactMobile;
