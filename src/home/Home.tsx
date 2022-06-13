import React from "react";
import { NewsCarousel } from "../components/carousel/news carousel/NewsCarousel";
import "./HomeStyles.scss";

export const Home: React.FC = () => {
  return (
    <div id="Home">
      <NewsCarousel />
    </div>
  );
};
