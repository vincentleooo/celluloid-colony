import type { NextPage } from "next";
import Head from "next/head";
import SegmentedIndex from "../components/segmented/Segmented";
import CTA from "../components/templates/CallToAction";
import CardsOverview from "../components/templates/CardsOverview";
import Hero from "../components/templates/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>
          Celluloid Colony: Locating History and Ethnography in Early Dutch
          Colonial Films of Indonesia.
        </title>
        <meta
          name="description"
          content="How should colonial film archives be read? How can historians and ethnographers use colonial film as a complement to conventional written sources? Sandeep Ray uses the case of Dutch colonial film in Indonesia to show how a critically-, historically- and cinematically-informed reading of colonial film in the archive can be a powerful and unexpected source, and one more easily accessible today via digitisation."
        />
        <meta
          name="og:image"
          content="https://i.ibb.co/Q7gZjbZ/og-image.webp"
        />
        <meta
          name="og:description"
          content="How should colonial film archives be read? How can historians and ethnographers use colonial film as a complement to conventional written sources? Sandeep Ray uses the case of Dutch colonial film in Indonesia to show how a critically-, historically- and cinematically-informed reading of colonial film in the archive can be a powerful and unexpected source, and one more easily accessible today via digitisation."
        />
      </Head>
      <Hero></Hero>
      {/* <CTA></CTA> */}
      <CardsOverview></CardsOverview>
    </>
  );
};

export default Home;
