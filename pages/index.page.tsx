/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import {
  getComics,
  getComicsByPage,
} from "dh-marvel/services/marvel/marvel.service";
import GridLayout from "dh-marvel/components/layouts/grid-layout/grid-layout.component";
import { useEffect, useState } from "react";
import { IComicResponse } from "types/index.types";
import { useRouter } from "next/router";
import Paginacion from "dh-marvel/components/paginacion/paginacion.component";
interface Props {
  comics: IComicResponse;
}

const QTY_OF_CARDS = 12;

const Index: NextPage<Props> = ({ comics }) => {
  const [comicsData, setComicsData] = useState<IComicResponse>();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  useEffect(() => {
    if (currentPage !== null) {
      router.push(`/?page=${currentPage}`, undefined, { shallow: true });

      getComicsByPage(QTY_OF_CARDS, currentPage).then(
        (data: IComicResponse) => {
          if (data.code === 200) {
            setComicsData(data);
          }
        }
      );
    }
  }, [currentPage]);
  const pagesQty: number =
    comics?.data?.total !== undefined ? Math.ceil(comics.data.total / 12) : 1;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Sample"}>
        <GridLayout
          comics={
            comicsData === undefined
              ? comics.data?.results
              : comicsData.data?.results
          }
        />
        <Paginacion pagesQty={pagesQty} setCurrentPage={setCurrentPage} />
      </BodySingle>
    </>
  );
};
export async function getServerSideProps() {
  const comics = await getComics(0, QTY_OF_CARDS);
  return { props: { comics } };
}
export default Index;
