import { ChangeEvent, useState } from "react";
import { Pagination, Box } from "@mui/material";
import { NextPage } from "next";

interface Props {
  cantidadPaginas: number;
  setCurrentPage: (page: number) => void;
}

const PaginationComponent: NextPage<Props> = ({
  cantidadPaginas,
  setCurrentPage,
}) => {
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <Box display="flex" justifyContent="center">
      <Pagination count={cantidadPaginas} onChange={handleChange} />
    </Box>
  );
};

export default PaginationComponent;
