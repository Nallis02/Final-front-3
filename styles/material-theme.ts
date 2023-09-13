import {createTheme} from "@mui/material";
//paleta de colores
const marvelColors = {
    primary: {
      light: "#ff6f61",
      main: "#ed1d24",
      dark: "#a30003",
    },
    secondary: {
      light: "#ffddc1",
      main: "#ffab00",
      dark: "#c67c00",
    },
    background: {
      default: "#f5f5f5",
    },
  };
  export const marvelTheme = createTheme({
    palette: {
      primary: marvelColors.primary,
      secondary: marvelColors.secondary,
      background: marvelColors.background,
    },
    typography: {
      fontFamily: "Comic Sans MS, cursive",
      h1: {
        fontFamily: "Impact, sans-serif",
        fontSize: "2rem",
      },
      h2: {
        fontFamily: "Impact, sans-serif",
        fontSize: "1.5rem",
      },
    },
  });
