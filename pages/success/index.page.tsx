/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Stack } from "@mui/material";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { useEffect, useState } from "react";
import CardSuccessCheckout from "dh-marvel/components/card-succes-checkout/card-succes-checkout.component";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ICheckout } from "types/index.types";
import { Cargando } from "dh-marvel/components/cargando/cargando.component";
import confetti from "canvas-confetti";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Head from "next/head";

const SuccesCheckout: NextPage = () => {
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
  }, []);
  const handleVolverInicio = () => {
    localStorage.removeItem("checkoutData");
  };
  if (!dataCheckout) {
    return <Cargando />;
  }

  return (
    <BodySingle title="Resumen de la compra">
      <Head>
        <link rel="icon" href="/marvel.jpg" />
        <title>Resumen de la compra</title>
      </Head>
      <Stack direction="column" alignItems="center">
        <CardSuccessCheckout data={dataCheckout} />
        <NextLink href="/">
          <Button
            variant="outlined"
            sx={{ margin: 5 }}
            onClick={handleVolverInicio}
          >
            Volver al Inicio
          </Button>
        </NextLink>
      </Stack>
    </BodySingle>
  );
};
(SuccesCheckout as any).Layout = LayoutCheckout;

export default SuccesCheckout;
