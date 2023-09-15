import { Box, Stack, Typography } from "@mui/material";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import GridLayout from "dh-marvel/components/layouts/grid-layout/grid-layout.component";
import { Cargando } from "dh-marvel/components/cargando/cargando.component";
import {
  getCharacter,
  getCharacters,
  getComicsByCharacterId,
  getComicsById,
} from "dh-marvel/services/marvel/marvel.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IComic,
  IComicResponse,
  IPersonaje,
  IPersonajeResponse,
} from "types/index.types";

interface Props {
  personaje: IPersonaje;
}
const Personajes: NextPage<Props> = ({ personaje }) => {

  const router = useRouter();

  if (router.isFallback) {
    return <Cargando />;
  }

  return (
    <>
      <Head>
      <link rel="icon" href="/marvel.jpg" />
        <title>Personaje</title>
        <meta
          name="description"
          content={`${personaje.name}.${personaje.description}`}
        />
      </Head>
      <BodySingle>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          {personaje.name}
        </Typography>
        <Box
          component="img"
          alt={personaje.name}
          src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
          sx={{
            maxWidth: 700,
            width: "100%",
          }}
        />
        {personaje.description ? (
          <Typography gutterBottom component="div">
            {personaje.description}
          </Typography>
        ) : (
          <Typography gutterBottom component="div">
            No tiene descripción disponible.
          </Typography>
        )}

        <Box
          sx={{
            background: "#f5f5f5",
            width: "100vw",
            padding: "0px",
            marging: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
         
        </Box>
      </BodySingle>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const response = await getCharacter(id);
  return {
    props: {
      personaje: response,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response: IPersonajeResponse = await getCharacters();
  const paths = response.data.results.map((character) => {
    return { params: { id: character.id.toString() } };
  });
  return {
    paths,
    fallback: true,
  };
};

export default Personajes;
