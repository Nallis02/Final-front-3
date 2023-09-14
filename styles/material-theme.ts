import { createTheme } from "@mui/material";
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
      fontFamily: "Comic Sans MS, cursive",
      fontSize: "2rem",
    },
    h2: {
      fontFamily: "Comic Sans MS, cursive",
      fontSize: "1.5rem",
    },
  },

  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          display: "block",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "800px",
          objectFit: "cover",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small screens (phones)
      sm: 600, // Small screens (tablets)
      md: 960, // Medium screens (small laptops)
      lg: 1280, // Large screens (laptops)
      xl: 1920, // Extra large screens (desktops)
    },
  },
});
