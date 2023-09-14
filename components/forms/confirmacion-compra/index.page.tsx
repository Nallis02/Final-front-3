import { Box, Button, Card, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Head from "next/head";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { Cargando } from "dh-marvel/components/cargando/cargando.component";
import { ICheckout } from "types/index.types";
import confetti from 'canvas-confetti';

const ConfirmacionCompraPage = () => {
  const router = useRouter();
  const [dataCheckout, setDataCheckout] = useState<ICheckout>();
  useEffect(() => {
    const confettiOptions = {
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
    };
    confetti(confettiOptions);
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("checkoutData");
    if (data !== null) {
      const obj = JSON.parse(data);
      setDataCheckout(obj);
    } else {
      router.push("/");
    }
  }, [router]);
  const handleVolverInicio = () => {
    localStorage.removeItem("checkoutData");
  };
  if (!dataCheckout) {
    return <Cargando />;
  }
  return (
    <LayoutCheckout>
      <Head>
      <link rel="icon" href="/marvel.jpg" />
        <title>Confirmación de compra</title>
        <meta
          name="description"
          content="Confirmación de compra de DH Marvel"
        />
      </Head>
      <Stack
        component="section"
        sx={{
          maxWidth: 1500,
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            maxWidth: 1000,
            width: "100%",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: 100,
              color: "#00bfa5",
              margin: 5,
            }}
          />
          <Typography variant="h4" paddingBottom={2}>
            ¡Que disfrutes tu compra!
          </Typography>
          <Typography
            variant="h5"
            paddingBottom={2}
            textAlign="center"
            fontWeight="bold"
          >
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                component="img"
                sx={{
                  maxWidth: 400,
                  width: "100%",
                  border: "3px solid #000",
                  height: "auto",
                }}
              />
            </Box>
            <Box
              sx={{
                maxWidth: 400,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" paddingBottom={2}>
                Datos de entrega:
              </Typography>
              <Typography paddingBottom={1}>
              </Typography>
              <Typography paddingBottom={1}>
              </Typography>
              <Typography paddingBottom={1}>
              </Typography>
            </Box>
          </Stack>
        </Card>
        <NextLink href="/">
          <Button variant="outlined" sx={{ margin: 5 }} onClick={handleVolverInicio}>
            Volver a la Inicio
          </Button>
        </NextLink>
      </Stack>
    </LayoutCheckout>
  );
};
(ConfirmacionCompraPage as any).Layout = LayoutCheckout;
export default ConfirmacionCompraPage;
