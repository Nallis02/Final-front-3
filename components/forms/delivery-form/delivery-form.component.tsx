import { Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledTextInput from "dh-marvel/components/controlled-text-input/ControlledTextInput.component";
import deliverySchema from "./schema";
import StepperNavigation from "../stepper-navigation.component";
import { IAddress } from "types/index.types";
import { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";

export type DeliveryFormProps = {
  data: IAddress;
  activeStep: number;
  handleNext: (data: IAddress) => void;
  handleBack: () => void;
};

const DeliveryForm: NextPage<DeliveryFormProps> = ({
  data,
  activeStep,
  handleNext,
  handleBack,
}) => {
  const methods = useForm<IAddress>({
    resolver: yupResolver(deliverySchema),
    defaultValues: {
      ...data,
    },
  });
  const { setFocus, handleSubmit } = methods;

  const onSubmit = (data: IAddress) => {
    handleNext(data);
  };
  useEffect(() => {
    setFocus("address1");
  }, []);

  return (
    <Stack>
      <Head>
        <link rel="icon" href="/marvel.jpg" />
        <title>Dirección de entrega</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <ControlledTextInput name="address1" label="Dirección" />
          <ControlledTextInput name="address2" label="Dirección alternativa" />
          <ControlledTextInput name="city" label="Ciudad" />
          <ControlledTextInput name="state" label="Provincia" />
          <ControlledTextInput name="zipCode" label="Código postal" />
        </FormProvider>
      </form>
      <StepperNavigation
        activeStep={activeStep}
        handleNext={handleSubmit(onSubmit)}
        handleBack={handleBack}
      />
    </Stack>
  );
};

export default DeliveryForm;
