import { Box, Card, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ICheckout } from "types/index.types";
import { NextPage } from "next";

type CardSuccessCheckoutProps = {
  data: ICheckout;
};

const CardSuccessCheckout: NextPage<CardSuccessCheckoutProps> = ({ data }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "min-content",
        width: "auto",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", sm: "50px 90px" },
        background: "#fcfcfc",
      }}
    >
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: "80px" }} />
      <Typography variant="h4" paddingBottom={5}>
        ¡Que disfrutes tu compra!
      </Typography>
      <Stack
        direction={{ sm: "column", md: "row" }}
      >
        <Box  >
          <Typography variant="h5" paddingBottom={5}>{data.order.name}</Typography>
          <Box
            component="img"
            alt={data.order.name}
            src={`${data.order.image}`}
            sx={{
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography variant="h5" marginTop={5} marginLeft={ 2}>Datos de entrega:</Typography>
          <Typography paddingBottom={1} marginLeft={ 2}>
            Comprador {data?.customer.name}
            {data?.customer.lastname}
          </Typography>
          <Typography paddingBottom={1} marginLeft={ 2}>
            Dirección: {data?.customer.address.address1}
          </Typography>
          {data?.customer.address.address2 && (
            <Typography paddingBottom={1} marginLeft={2}>
              Dirección alternativa: {data?.customer.address.address2}
            </Typography>
          )}
        </Box>
      </Stack>
    </Card>
  );
};

export default CardSuccessCheckout;
