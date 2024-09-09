const bgGradient = "linear(black 0%, #B02C28 50%, #D7342C 75%, #FF3B30 100%)";

export const checkBoxStyles = {
  w: "100px",
  h: "10vh",
  mx: 2,
  my: 1,
  bgGradient: bgGradient,
  color: "white",
  _hover: {
    bgGradient: bgGradient,
    cursor: "pointer",
  },
  _active: {
    bgGradient: bgGradient,
  },
  _focus: {
    bgGradient: bgGradient,
  }, // Elimina el estilo de enfoque predeterminado
  sx: { WebkitTapHighlightColor: "transparent" }, // Elimina el color de resaltado al tocar
};
