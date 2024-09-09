import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import RightGrid from "./RightGrid";
import ProgramsHome from "./ProgramsHome";

function RightHome() {
  return (
    <Flex
      w={"38vw"}
      h={"80vh"}
      border={"1px solid black"}
      justifyContent={"space-evenly"}
      borderRadius={"15px"}
    >
      <Tabs
        isFitted
        variant="enclosed"
        mt={"10px"}
        w={"95%"}
        borderRadius={"25px"}
        colorScheme="red"
      >
        <TabList mb="1em">
          <Tab>Manuales</Tab>
          <Tab>Programas</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex direction="column" maxH="60vh" overflowY="auto">
              <RightGrid />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction="column" maxH="60vh" overflowY="auto">
              <ProgramsHome />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default RightHome;
