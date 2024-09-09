import { Card, Divider, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import YouTube from "./assets/page/YouTube.svg";
import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";

type Videos = {
  title: number;
  video_url: string;
  thumbnail_url: string;
};

function VideosMobile() {
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
      {" "}
      <Card
        alignItems={""}
        p={5}
        m="5"
        h="calc(80vh - 60px)"
        variant="outline"
        direction={{ base: "column", sm: "column" }}
      >
        <Heading textAlign={"center"} size="md">
          Lista de Videos
        </Heading>
        <Divider my={3} borderWidth="3px" borderColor="red.700" />
        <Stack overflowY={"auto"}>
          {data?.map((elem) => (
            <a key={elem.title} href={elem.video_url}>
              <Flex
                justifyContent={"space-between"}
                m={2}
                bg={"red.50"}
                borderRadius={"20px"}
                boxShadow={"1px 2px 3px red"}
                p={5}
              >
                <Image
                  maxH={"40px"}
                  objectFit={"cover"}
                  src={YouTube}
                  alt="YouTubeLogo"
                />
                <Flex
                  direction={"column"}
                  alignItems={"stretch"}
                  justifyContent={"space-around"}
                >
                  <Heading textAlign={"left"} fontSize={"0.8em"}>
                    {elem.title}
                  </Heading>
                </Flex>
              </Flex>
            </a>
          ))}
        </Stack>
      </Card>
    </>
  );
}

export default VideosMobile;
