import { Box, Stack } from "@mui/system";

export const Cargando = () => {
  return (
    <Stack height={"100%"} alignItems="center" justifyContent="center">
      <Box
        component="img"
        sx={{ maxWidth: 450 }}
        alt="loading"
        src={"/loading.gif"}
      />
    </Stack>
  );
};