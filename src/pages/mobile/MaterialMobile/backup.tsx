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

import axios from "axios";
import { useEffect, useState } from "react";

type manuals = {
  id: number;
  file: string;
  title: string;
  thumbnail: string;
  alt: string;
};

function MaterialMobile() {
  // Para el botón like
  const [data, setData] = useState<manuals[]>();

  const fetchAPI = async () => {
    try {
      const response = await axios.get<{ manuales: manuals[] }>(
        "http://localhost:8000/manuales"
      );

      if (response.data && response.data.manuales) {
        setData(response.data.manuales);
      } else {
        console.error("La respuesta no contiene el campo");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const getBook = (name_file: string) => {
    const url_back = `http://localhost:8000/dmanuals/${name_file}`;
    return url_back;
  };

  const getThumbnail = (name_file: string) => {
    const url_back = `http://localhost:8000/tmanuals/${name_file}`;
    return url_back;
  };

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
