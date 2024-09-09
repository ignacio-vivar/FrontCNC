import {
  Button,
  Card,
  CardBody,
  Grid,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";

import Download from "./assets/Download.svg";

import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";

type Manual = {
  id: number;
  file: string;
  title: string;
  thumbnail: string;
  alt: string;
};

function RightGrid() {
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
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={1}
        mt={0}
        alignItems={"top"}
        justifyContent={"center"}
      >
        {data?.map((elem) => (
          <Card
            maxW="sm"
            alignItems={"center"}
            justifyContent={"center"}
            key={elem.id}
          >
            <CardBody>
              <Image
                objectFit={"cover"}
                w={"100%"}
                h={"80px"}
                objectPosition={"center"}
                src={getThumbnail(elem.thumbnail)}
                alt={elem.alt}
                borderRadius="lg"
              />
              <Stack mt="2" spacing="1">
                <Heading size="s">{elem.title}</Heading>
              </Stack>
              <Stack
                mt="2"
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  objectFit="cover"
                  maxW={"40px"}
                  maxH={"30px"}
                  src={Download}
                  alt="downloadButton"
                />
                <a href={getBook(elem.file)}>
                  <Button
                    maxW={"80px"}
                    maxH={"30px"}
                    variant="outline"
                    colorScheme="red"
                  >
                    Descargar
                  </Button>
                </a>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default RightGrid;
