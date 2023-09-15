/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledTextInput from "dh-marvel/components/controlled-text-input/ControlledTextInput.component";
import { personalDataSchema } from "./schema";
import StepperNavigation from "../stepper-navigation.component";
import { ICustomer } from "types/index.types";
import { NextPage } from "next";
import Head from "next/head";

export type CustomerDataProps = {
  data: ICustomer;
  activeStep: number;
  handleNext: (data: ICustomer) => void;
};

const CustomerDataForm: NextPage<CustomerDataProps> = ({
  data,
  activeStep,
  handleNext,
}: CustomerDataProps) => {
  const methods = useForm<ICustomer>({
    resolver: yupResolver(personalDataSchema),
    defaultValues: { ...data },
  });
  const { setFocus, handleSubmit } = methods;

  const onSubmit = (data: ICustomer) => {
    handleNext(data);
  };
  useEffect(() => {
    setFocus("name");
  }, []);

  return (
    <Stack>
      <Head>
        <link rel="icon" href="/marvel.jpg" />
        <title>Datos personales</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <ControlledTextInput name="name" label="Nombre" />
          <ControlledTextInput name="lastname" label="Apellido" />
          <ControlledTextInput name="email" label="Email" />
        </FormProvider>
      </form>
      <StepperNavigation
        activeStep={activeStep}
        handleNext={handleSubmit(onSubmit)}
        handleBack={() => {}}
      />
    </Stack>
  );
};

export default CustomerDataForm;
