import type { NextPage } from "next";
import SegmentedIndex from "../components/segmented/Segmented";
import CTA from "../components/templates/CallToAction";
import CardsOverview from "../components/templates/CardsOverview";
import Hero from "../components/templates/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero></Hero>
      {/* <CTA></CTA> */}
      <CardsOverview></CardsOverview>
    </>
  );
};

export default Home;
