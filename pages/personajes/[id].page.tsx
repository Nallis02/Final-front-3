import { Box, Stack, Typography } from "@mui/material";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import GridLayout from "dh-marvel/components/layouts/grid-layout/grid-layout.component";
import { Cargando } from "dh-marvel/components/loading/loading.component";
import { getCharacter, getCharacters, getComicsByCharacterId } from "dh-marvel/services/marvel/marvel.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IComic, IComicResponse, IPersonaje, IPersonajeResponse } from "types/index.types";

interface Props {
    personaje: IPersonaje;
  } 
const Personajes: NextPage<Props> = ({ personaje }) => {
    console.log(personaje);
    
    const [comics, setComics] = useState<IComic[]>();
    const router = useRouter();
  
    useEffect(() => {
      const limit = 6;
      if (personaje) {
        getComicsByCharacterId(personaje.id, limit).then(
          (data: IComicResponse) => {
            if (data.code === 200) {
              setComics(data.data?.results);
            }
          }
        );
      }
    }, [personaje]);
  
    if (router.isFallback) {
      return <Cargando />;
    }
  
    return (
      <>
        <Head>
          <title>DH-MARVEL</title>
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
                textShadow: "2px 2px 8px #6ae1ff",
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
                border: "3px solid #000",
                boxShadow: "12px 12px #000",
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
            <Stack
              component="section"
              maxWidth="xl"
              direction="column"
              alignItems="center"
              justifyContent="center"
              paddingY={15}
              paddingX={{ xs: 3, sm: 4, md: 4 }}
            >
              <Typography variant="h4" paddingBottom={10}>
                Otros comics de {personaje.name}
              </Typography>
              {comics && <GridLayout comics={comics} xl={4} />}
            </Stack>
          </Box>
          </BodySingle>
      </>
    );
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = parseInt(params?.id as string);
    console.log(id);
    const response = await getCharacter(id);
    return {
      props: {
        personaje: response,
      },
      revalidate: 10,
    };
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const response : IPersonajeResponse = await getCharacters();
    console.log(response);
    const paths = response.data.results.map((character) => {
      return { params: { id: character.id.toString() } };
    });
    return {
      paths,
      fallback: true,
    };
  };
  
  export default Personajes;
  