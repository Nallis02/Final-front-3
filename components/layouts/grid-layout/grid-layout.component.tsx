import type { NextPage } from "next";
import ComicCard from "dh-marvel/components/card/card.component";
import { Grid } from "@mui/material";
import { IComic } from "types/index.types";

interface Props {
  comics: IComic[];
}

const GridLayout: NextPage<Props> = ({ comics }) => {
  return (
    <Grid
      container
      alignItems="stretch"
      rowSpacing={2} 
      columnSpacing={2} 
    >
      {comics?.map((comic) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={comic.id}>
          <ComicCard comic={comic} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridLayout;
