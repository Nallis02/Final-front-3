import { PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import GeneralHeader from "dh-marvel/components/layouts/header/general-header.component";
import GeneralFooter from "dh-marvel/components/layouts/footer/general-footer.component";
import { NextPage } from "next";

const LayoutCheckout: NextPage<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      <Stack direction={"column"} height={"100%"}>
        <GeneralHeader variant={"simple"} />
        <Box display={"flex"} flexGrow={1}>
          {children}
        </Box>
        <GeneralFooter />
      </Stack>
    </>
  );
};
export default LayoutCheckout;
