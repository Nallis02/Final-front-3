import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GetStaticProps, NextPage } from "next";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Head from "next/head";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}
const FAQSPage: NextPage<Props> = ({ faqs }) => {
  return (
    <>
      <Head>
        <title>Preguntas Frecuentes</title>
        <meta
          name="description"
          content="Encuentra respuestas a las preguntas frecuentes sobre nuestro sitio."
        />
        <meta
          name="keywords"
          content="preguntas frecuentes, respuestas, ayuda"
        />
      </Head>

      <BodySingle title="Preguntas Frecuentes">
        {faqs.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </BodySingle>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://final-front-3-git-main-nallis02.vercel.app/api/faqs");
  const faqs = await response.json();

  return {
    props: {
      faqs,
    },
  };
};

export default FAQSPage;