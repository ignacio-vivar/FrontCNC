import {
  Card,
  CardBody,
  Flex,
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
      justifyContent={"center"}
      direction={"column"}
      overflowY={"auto"}
      m="5"
      h="calc(80vh - 60px)"
    >
      {data?.map((elem) => (
        <Card
          direction={{ base: "column", sm: "column" }}
          overflow="hidden"
          variant="outline"
          maxW={{ base: "85%", sm: "70%" }}
          h={"30vh"}
          mt={"5"}
          mb={"5"}
          key={elem.id}
        >
          <Image
            src={getThumbnail(elem.thumbnail)}
            objectFit={"cover"}
            maxH={"60px"}
          />
          <Stack>
            <CardBody>
              <Heading size="md">{elem.title}</Heading>
              <a href={getBook(elem.file)}>
                <IconButton
                  aria-label="right-arrow"
                  colorScheme="red"
                  borderRadius="full"
                  position="absolute"
                  transform={"translate(0%, 50%)"}
                  right={"15px"}
                  zIndex={2}
                >
                  <IoMdDownload />
                </IconButton>
              </a>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </Flex>
  );
}

export default MaterialMobile;
