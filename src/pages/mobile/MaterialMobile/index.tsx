import {
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Stack,
} from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";

import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";

type Manual = {
  id: number;
  file: string;
  title: string;
  thumbnail: string;
  alt: string;
};

function MaterialMobile() {
  // Para el botón like
  const [data, setData] = useState<Manual[]>();
  const { fetchData, createURL } = useApi();

  const fetchAPI = async () => {
    const response = await fetchData<{ manuales: Manual[] }>("/manuales");
    if (response && response.manuales) {
      setData(response.manuales);
    } else {
      console.error("No hay respuesta");
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [fetchData]);

  const getBook = (name_file: string) => createURL(`/dmanuals/${name_file}`);
  const getThumbnail = (name_file: string) =>
    createURL(`/tmanuals/${name_file}`);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"start"}
      direction={"column"}
      overflowY={"auto"}
      m="2"
      h="calc(80vh - 10px)"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {data?.map((elem) => (
          <Card
            direction={{ base: "column", sm: "column" }}
            overflow="hidden"
            variant="outline"
            maxW={{ base: "100%", sm: "100%" }}
            h={"100x"}
            mt={"1"}
            mb={"1"}
            key={elem.id}
          >
            <Image
              src={getThumbnail(elem.thumbnail)}
              objectFit={"cover"}
              maxH={"60px"}
            />
            <Stack>
              <CardBody>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Heading fontSize={"14px"}>{elem.title}</Heading>
                  <a href={getBook(elem.file)}>
                    <IconButton
                      aria-label="right-arrow"
                      colorScheme="red"
                      borderRadius="full"
                      zIndex={2}
                      m={2}
                    >
                      <IoMdDownload />
                    </IconButton>
                  </a>
                </Flex>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </Grid>
    </Flex>
  );
}

export default MaterialMobile;
