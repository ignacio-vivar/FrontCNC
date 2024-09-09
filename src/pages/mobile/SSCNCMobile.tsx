import { Button, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Download from "./assets/page/Download.svg";
import SSCNC_LOGO from "./assets/page/SSCNC_LOGO.svg";
import { buttonStyles } from "./styles/buttonStyles";

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

type Sscnc = {
  id: number;
  file: string;
  title: string;
  desc: string;
};

function SSCNCMobile() {
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
      <Card
        alignItems={"top"}
        mt={5}
        mx={5}
        p={5}
        maxH={"75vh"}
        variant="outline"
        direction={{ base: "row", sm: "row" }}
      >
        <Image
          maxW={{ base: "120px", sm: "60px" }}
          h={"20vh"}
          src={SSCNC_LOGO}
          alt="SSCNC Logo"
          mr={"3"}
          borderRadius={"15px"}
        />

        <Flex
          direction={"column"}
          justifyContent={"space-around"}
          alignItems={"top"}
        >
          <Heading size="md">SSCNC</Heading>
          <Text>Nanjing Swansoft</Text>
          <a
            href={
              "https://drive.google.com/file/d/1dVvjuu3VFqqcTuFlKAie3psqON7FkwYC/view?usp=sharing"
            }
          >
            <Button variant="solid" colorScheme="red">
              Descargar
            </Button>
          </a>
        </Flex>
      </Card>
      <Flex justifyContent="center" my={5}>
        <Heading textAlign="center" size="md">
          Simulador SSCNC
        </Heading>
      </Flex>
      {data?.map((elem) => (
        <a key={elem.id} href={getGuide(elem.file)}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image src={Download} alt="Download" />
            <Button {...buttonStyles}>{elem.title}</Button>
          </Flex>
        </a>
      ))}
    </>
  );
}

export default SSCNCMobile;
