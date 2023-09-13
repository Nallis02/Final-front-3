import { useRouter } from "next/router";
import { IComic } from "types/index.types";
import Card from "@mui/material/Card";
import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import { NextPage } from "next";
import ComprarUnClic from "../ComprarUnClic/comprar-un-clic";

interface Props {
  comic: IComic;
}
const ComicCard: NextPage<Props> = ({ comic }) => {
  const router = useRouter();

  return (
    <Box>
      <Card variant="elevation"  >
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
          <NextLink href={`/comics/${comic.id}`} passHref>
            <Button variant="contained">
              Ver detalles
            </Button>
          </NextLink>
          <NextLink href={`/comics/${comic.id}`} passHref>
            <Button variant="contained">
              Comprar
            </Button>
          </NextLink>
          <ComprarUnClic comic={comic} />
        </CardActions>
      </Card>
    </Box>
  );
};
export default ComicCard;