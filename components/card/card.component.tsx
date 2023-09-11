import { getComicsById } from "dh-marvel/services/marvel/marvel.service";
import { useRouter } from "next/router";
import { FC } from "react";
import { IComic } from "types/index.types";
import Card from '@mui/material/Card';
import { Box, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import NextLink from "next/link";

interface Props {
  comic: IComic;
}

const Cards: FC<Props> = ({ comic }) => {
  const router = useRouter();

  const comprarComic = async (id: number) => {
    const response: IComic = await getComicsById(id);

    if (response.stock > 0) {
      router.push({
        pathname: "/checkout",
        query: { comic: comic.id },
      });
    } else {
      router.push(`/comics/${id}`);
    }
  };

  return (
    <Card variant="outlined">
      <Box>
        <CardMedia
          component="img"
          height="350"
          image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {comic.title}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <NextLink href={`/comics/${comic.id}`}>
          <Button >Ver detalles</Button>
        </NextLink>
        <Button onClick={() => comprarComic(comic.id)}>
          COMPRAR
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;