import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";
import Download from "./HomeDesktop/assets/Download.svg";

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

type Tps = {
  id: number;
  file: string;
  name: string;
};
function DesktopTPS() {
  const [data, setData] = useState<Tps[]>();
  const { fetchData, createURL } = useApi();

  const fetchAPI = async () => {
    const response = await fetchData<{ tps: Tps[] }>("/tps");
    if (response && response.tps) {
      setData(response.tps);
    } else {
      console.error("No hay respuesta");
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [fetchData]);

  const makeURL = (name_file: string) => createURL(`/files/${name_file}`);

  const makeDURL = (name_file: string) => createURL(`/dfiles/${name_file}`);

  const styleGradient =
    "linear(black 0%, #B02C28 50%, #D7342C 75%, #FF3B30 100%)";
  return (
    <Flex
      alignItems={"top"}
      justifyContent={"center"}
      mt={"10px"}
      w={"100%"}
      h={"85vh"}
      border={"1px solid black"}
      borderRadius={"1px"}
    >
      <Accordion defaultIndex={[]} w="100%" overflowY={"auto"}>
        {data?.map((elem) => (
          <AccordionItem key={elem.id}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight={"bold"}
                  fontSize={"xl"}
                  boxShadow={"1px 1px 1px 3px #AA0000"}
                  bgClip="text"
                  backgroundImage={styleGradient}
                  p={2}
                >
                  {elem.name}
                </Box>
                <AccordionIcon ml={5} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack
                direction={"column"}
                spacing={2}
                justifyContent={"space-around"}
                alignItems={"stretch"}
              >
                <Box border="1px solid #ccc" borderRadius="md" p={4}>
                  <iframe
                    src={makeURL(elem.file)}
                    width="100%"
                    height="400px"
                    style={{ border: "none" }} // Remueve el borde del iframe
                    title="PDF Viewer"
                  />
                </Box>

                <ButtonGroup variant="outline" m={"20px"} alignSelf={"center"}>
                  {" "}
                  <a href={makeDURL(elem.file)}>
                    <Stack direction={"row"} _hover={{ cursor: "pointer" }}>
                      <Image
                        objectFit="cover"
                        maxW={"40px"}
                        maxH={"30px"}
                        src={Download}
                        alt="Download Logo"
                      />

                      <Button colorScheme="red">Descargar</Button>
                    </Stack>
                  </a>
                </ButtonGroup>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}

export default DesktopTPS;
