import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";

function LeftHome() {
  const styleAcordion = {
    bg: "rgba(0,0,0,0.05)",
    borderRadius: "5px",
    border: "0.1px solid rgba(0,0,0,0.5)",
    m: 2,
    px: 10,
    py: 2,
  };

  const ModuleApprovalContent = () => (
    <Box>
      <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
        Las condiciones son:
      </p>
      <ul>
        <li>Asistencia mínima del 80%.</li>
        <li>Entrega y Aprobado del 80% de los trabajos prácticos.</li>
        <li>Examen parcial escrito aprobado o recuperado.</li>
        <li>Examen oral del simulador aprobado o recuperado.</li>
        <li>Respeto por el entorno de trabajo y adecuada limpieza.</li>
        <li>Respeto y cumplimiento de las normas de convivencia.</li>
      </ul>
    </Box>
  );

  const Contact = () => (
    <Box>
      <ul>
        <li>Email: ignacio.vivar.cruz@gmail.com</li>
        <li>Profesor: Juan José Ignacio Vivar Cruz</li>
        <li>Institución: Colegio Salesiano Dean Funes</li>
      </ul>
    </Box>
  );

  const info = [
    {
      id: 1,
      title: "Condiciones de aprobación del Módulo",
      content: <ModuleApprovalContent />,
    },

    {
      id: 2,
      title: "Información de Contacto",
      content: <Contact />,
    },
  ];
  return (
    <Flex
      w={"58vw"}
      h={"80vh"}
      border={"1px solid black"}
      justifyContent={"space-evenly"}
      borderRadius={"15px"}
      alignItems={"top"}
    >
      <Accordion w={"90%"} allowMultiple mt={5} defaultIndex={[]}>
        {info.map((elem) => (
          <AccordionItem key={elem.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  {elem.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel {...styleAcordion}>{elem.content}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}

export default LeftHome;
