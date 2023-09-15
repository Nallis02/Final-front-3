import Box from "@mui/material/Box";
import Image from "next/image";
import { Link, Typography } from "@mui/material";
import { marvelTheme } from "dh-marvel/styles/material-theme";

const GeneralFooter = () => {
  return (
    <Box
      component={"footer"}
      display={"flex"}
      p={"1rem 0"}
      alignItems="center"
      justifyContent={"center"}
      borderTop={"1px solid #eaeaea"}
      sx={{ backgroundColor: marvelTheme.palette.primary.main }} 
    >
      <Link
        href="https://www.linkedin.com/in/lida-nallive-trujillo-mu%C3%B1oz-803aa7200/"
        target="_blank"
        rel="noopener noreferrer"
        display={"flex"}
        flexGrow={1}
        alignItems={"center"}
        justifyContent={"center"}
        color={"#fff"}
        sx={{ textDecoration: "none" }}
      >
        By
        <Box
          ml={"0.5rem"}
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
        >

        </Box>
        <Typography> Nallive Trujillo</Typography>
      </Link>
    </Box>
  );
};
export default GeneralFooter;
