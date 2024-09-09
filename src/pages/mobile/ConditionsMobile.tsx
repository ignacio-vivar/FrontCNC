import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

import { FcCheckmark } from "react-icons/fc";

type Props = {};

function ConditionsMobile({}: Props) {
  return (
    <Flex
      m="1"
      h="calc(80vh - 60px)"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      alignContent={"center"}
    >
      <Box
        m={2}
        p={2}
        alignContent={"center"}
        alignItems={"center"}
        bg={"red.50"}
        borderRadius={"10px"}
      >
        <Text
          textAlign={"center"}
          fontSize="2xl"
          fontFamily={"OpenSans"}
          fontWeight={"bold"}
        >
          LAS CONDICIONES DEL MÓDULO SON:
        </Text>

        <List
          spacing={3}
          height="50vh" // Ajusta la altura según tus necesidades
          overflowY="auto" // Habilita el desplazamiento vertical
          textAlign={"justify"}
        >
          <ListItem>
            <ListIcon as={FcCheckmark} color="green.500" />
            Asistencia mínima del 80%.
          </ListItem>
          <ListItem>
            <ListIcon as={FcCheckmark} color="green.500" />
            Entrega y Aprobado del 80% de los trabajos prácticos.
          </ListItem>
          <ListItem>
            <ListIcon as={FcCheckmark} color="green.500" />
            Examen parcial escrito aprobado o recuperado.
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={FcCheckmark} color="green.500" />
            Examen oral del simulador aprobado o recuperado.
          </ListItem>
          <ListItem>
            <ListIcon as={FcCheckmark} color="green.500" />
            Respeto por el entorno de trabajo y adecuada limpieza.
          </ListItem>
          <ListItem>
            <ListIcon as={FcCheckmark} color="green.500" />
            Respeto y cumplimiento de las normas de convivencia.
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}

export default ConditionsMobile;
