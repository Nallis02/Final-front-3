import { PropsWithChildren } from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";
import { NextPage } from "next";

interface BodySingleProps extends PropsWithChildren {
  title?: string;
  containerProps?: ContainerProps;
}

const BodySingle: NextPage<BodySingleProps> = ({
  title,
  containerProps,
  children,
}: BodySingleProps) => {
  return (
    <Container maxWidth="xl" {...containerProps}>
    <Stack
      direction={"column"}
      display={"flex"}
      justifyContent={"center"}
      mt={4}
      p={3}
    >
      {title && (
        <Typography
          variant={"h2"}
          my={2}
          textAlign={"center"}
          fontSize={28}
          fontWeight={600}
        >
          {title}
        </Typography>
      )}
      {children}
    </Stack>
  </Container>
  
  );
};
export default BodySingle;
