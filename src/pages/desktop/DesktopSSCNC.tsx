import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import SSCNC_LOGO from "./assets/page/SSCNC_LOGO.svg";

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

type Sscnc = {
  id: number;
  file: string;
  title: string;
  desc: string;
};

function DesktopSSCNC() {
  const [data, setData] = useState<Sscnc[]>();
  const { fetchData, createURL } = useApi();

  const fetchAPI = async () => {
    const response = await fetchData<{ sscnc: Sscnc[] }>("/sscnc");
    if (response && response.sscnc) {
      setData(response.sscnc);
    } else {
      console.error("No hay respuesta");
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [fetchData]);

  const getGuide = (name_file: string) => createURL(`/dsscnc/${name_file}`);

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Card
          alignItems={"center"}
          justifyContent={"center"}
          mt={5}
          mx={5}
          p={4}
          w={"50%"}
          maxH={"75vh"}
          variant="outline"
          direction={{ base: "row", sm: "row" }}
        >
          <Image
            maxW={{ base: "200px", sm: "160px" }}
            h={"20vh"}
            src={SSCNC_LOGO}
            alt="SSCNC Logo"
            mr={"3"}
            borderRadius={"15px"}
          />

          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Heading m={2} size="md">
              SSCNC
            </Heading>
            <Text m={2}>Nanjing Swansoft</Text>
            <a
              href={
                "https://drive.google.com/file/d/1dVvjuu3VFqqcTuFlKAie3psqON7FkwYC/view?usp=sharing"
              }
            >
              <Button m={2} variant="solid" colorScheme="red">
                Descargar
              </Button>
            </a>
          </Flex>
        </Card>
        <ButtonGroup mt={10} size="xl" variant="outline">
          {data?.map((item) => (
            <Card key={item.id} pt={5} maxW={"200px"} alignItems={"center"}>
              <a href={getGuide(item.file)}>
                <Button variant="outline" colorScheme="red" mx={5} p={5}>
                  {item.title}
                </Button>
              </a>
              <CardFooter
                mt={3}
                p={3}
                fontFamily="Georgia, serif"
                fontWeight="bold"
                fontSize="0.9em"
                textAlign="center"
                color="red.600"
                borderTop="4px solid"
                borderColor="black.500"
              >
                {item.desc}
              </CardFooter>
            </Card>
          ))}
        </ButtonGroup>
      </Flex>
    </>
  );
}

export default DesktopSSCNC;
