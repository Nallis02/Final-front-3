import { Box, Button } from "@mui/material";
import { getComicsById } from "dh-marvel/services/marvel/marvel.service";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { IComic } from "types/index.types";

interface Props {
  comic: IComic;
}

const ComprarUnClic: NextPage<Props> = ({ comic }) => {
  const router = useRouter();

  const comprarComic = async (comicId: number) => {
    const response = await getComicsById(comicId);
    response.json().then((dataInfo: IComic) => {
      if (dataInfo.stock === 0) {
        router.push(`/comics/${dataInfo.id}`);
      } else {
        router.push(`/checkout?comic=${dataInfo.id}`);
      }
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "8px" }}>
      <Button type='button' variant="contained" onClick={() => comprarComic(comic.id)}
      >
        Compra en 1 click
      </Button>
    </Box>
    
  );
};

export default ComprarUnClic;
