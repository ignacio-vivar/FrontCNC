import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

type Programs = {
  id: number;
  name: string;
  url: string;
  file: string;
};

function ProgramsHome() {
  const [data, setData] = useState<Programs[]>();
  const { fetchData, createURL } = useApi();

  const fetchAPI = async () => {
    const response = await fetchData<{ programs: Programs[] }>("/programs");
    if (response && response.programs) {
      setData(response.programs);
    } else {
      console.error("No hay respuesta");
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [fetchData]);

  const getImage = (name_file: string) => createURL(`/programs/${name_file}`);

  return (
    <>
      <Grid
        templateColumns="repeat(1, 0.9fr)"
        gap={5}
        justifyContent={"center"}
      >
        {data?.map((elem) => (
          <GridItem
            key={elem.id}
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
            border={"1px solid rgba(0,0,0,0.5)"}
            borderRadius={"15px"}
            bgColor={"red.50"}
            boxShadow={"2px 4px 4px red"}
            p={"5px"}
            my={"5px"}
          >
            <a href={elem.url}>
              <Flex flexDirection={"row"}>
                <Image
                  objectFit={"cover"}
                  maxH={"40px"}
                  maxW={"40px"}
                  borderRadius={"5px"}
                  src={getImage(elem.file)}
                />
                <Text px={5} fontSize="20px" color="red.700">
                  {elem.name}
                </Text>
              </Flex>
            </a>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default ProgramsHome;
