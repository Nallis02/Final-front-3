import { useRouter } from "next/router";
import { IComic } from "types/index.types";
import Card from "@mui/material/Card";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import { NextPage } from "next";
import ComprarUnClic from "../ComprarUnClic/comprar-un-clic";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
interface Props {
  comic: IComic;
}
const ComicCard: NextPage<Props> = ({ comic }) => {
  const router = useRouter();

  return (
    <Box mb={4} position="relative">
      <Card variant="elevation">
        <CardMedia
          component="img"
          image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          sx={{
            height: {
              xs: "350px",
              sm: "600px",
              md: "600px",
              lg: "800px",
              xl: "800px",
            },
            width: "100%",
          }}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {comic.title}
          </Typography>
        </CardContent>
        <Box
          position="absolute"
          bottom="80px"
          left="0"
          right="0"
          textAlign="center"
          p={2}
          bgcolor="rgba(255, 255, 255, 0.7)"
        >
          <NextLink href={`/comics/${comic.id}`} passHref>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0 5px" }}
            >
              Ver detalles
            </Button>
          </NextLink>
          <NextLink href={`/comics/${comic.id}`} passHref>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "0 5px" }}
            >
              Comprar
            </Button>
          </NextLink>
          <ComprarUnClic comic={comic} />
        </Box>
      </Card>
    </Box>
  );
};
export default ComicCard;
