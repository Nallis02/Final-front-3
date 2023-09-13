import { Box, Stack } from "@mui/material";
import CardCheckoutProduct from "dh-marvel/components/card-checkout-product/card-checkout-product";
import StepperForm from "dh-marvel/components/forms/stepper-form.component";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { Cargando } from "dh-marvel/components/cargando/cargando.component";
import { getComicsById } from "dh-marvel/services/marvel/marvel.service";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IComic } from "types/index.types";

const Checkout: NextPage = () => {
  const router = useRouter();
  const { comic } = router.query;
  const [comicData, setComicData] = useState<IComic>();

  useEffect(() => {
    const id = parseInt(comic as string);
    if (comic) {
      getComicsById(id).then((data) => {
        data.json().then((dataInfo: IComic)=>{
          setComicData(dataInfo);
        })
      });
    }
  }, [comic]);

  if (!comic) {
    return <Cargando />;
  }

  return (
    <Box
      sx={{
        padding: { xs: "80px 20px", sm: "100px 20px" },
      }}
    >
      <Stack
        direction={{ sm: "column", md: "row-reverse" }}
        spacing={{ xs: 15, sm: 15, md: 8, xl: 20 }}
        alignItems={{ xs: "center", sm: "center", md: "self-start" }}
      >
        <Box
          sx={{
            backgroundColor: "#f3f3f3",
            height: "100%",
            padding: "30px",
          }}
        >
          <CardCheckoutProduct comic={comicData} />
        </Box>
        <Box>
          <StepperForm comic={comicData} />
        </Box>
      </Stack>
    </Box>
  );
};
(Checkout as any).Layout = LayoutCheckout;

export default Checkout;
