import { Button, Flex, Image } from "@chakra-ui/react";
import Download from "./assets/page/Download.svg";
import { buttonTpStyles } from "./styles/buttonStyles";

import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

type Tps = {
  id: number;
  file: string;
  name: string;
};

function TpsMobile() {
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

  const makeDURL = (name_file: string) => createURL(`/dfiles/${name_file}`);

  return (
    <>
      <Flex direction={"column"} overflowY="auto" m="5" h="calc(80vh - 60px)">
        {data?.map((TPElem) => (
          <a href={makeDURL(TPElem.file)} key={TPElem.id}>
            <Flex
              m={2}
              p={1}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Image src={Download} alt="Download" />
              <Button {...buttonTpStyles}>{TPElem.name}</Button>
            </Flex>
          </a>
        ))}
      </Flex>
    </>
  );
}
export default TpsMobile;
