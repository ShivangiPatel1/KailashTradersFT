import React from "react";
import MajorSection from "../../Components/Section/MajorSection";
import SubSection from "../../Components/Section/SubSection";
import { introsection, ValuesQuality, Brands } from "./HomeSectionsFeatures";

const Home = () => {
  return (
    <>
      <MajorSection {...introsection} />
      <SubSection {...ValuesQuality} />
      <SubSection {...Brands} />
    </>
  );
};

export default Home;
