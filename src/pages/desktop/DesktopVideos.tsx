import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";

type Videos = {
  title: number;
  video_url: string;
  thumbnail_url: string;
};

function DesktopVideos() {
  const [data, setData] = useState<Videos[]>();
  const { fetchData } = useApi();

  const fetchAPI = async (playlist_url: string) => {
    const response = await fetchData<{ videos: Videos[] }>(
      `/playlist/?playlist_url=${playlist_url}`
    );
    if (response && response.videos) {
      setData(response.videos);
    } else {
      console.error("No hay respuesta");
    }
  };

  const URL_PLAYLIST =
    "https://youtube.com/playlist?list=PLH-4iNiWPn8WVWdPd9czc9Qn_4QygebCK&si=JA0cVwnA6EW2i-vD";

  useEffect(() => {
    fetchAPI(URL_PLAYLIST);
  }, [fetchData]);
  return (
    <>
      <Stack>
        <Heading textAlign={"center"} m={1} size={"xl"}>
          Lista de Videos, YouTube
        </Heading>
      </Stack>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {data?.map((elem) => (
          <Center py={12} key={elem.title}>
            <Box
              role={"group"}
              p={6}
              maxW={"300px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <Link to={elem.video_url}>
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"130px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${elem.thumbnail_url})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={120}
                    width={60}
                    objectFit={"cover"}
                    src={elem.thumbnail_url}
                    alt="#"
                  />
                </Box>
              </Link>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  {elem.title}
                </Text>
              </Stack>
            </Box>
          </Center>
        ))}
      </Grid>
    </>
  );
}

export default DesktopVideos;
