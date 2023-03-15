import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "./CardSection";
import SongsCardSection from "./SongsCardSection";
import { fetchNewAlbum, fetchTopAlbum, fetchSongs } from "../Api";
import FAQSection from "./FAQSection";

function Body() {
  return (
    <div>
      <HeroSection />
      <CardSection title="Top Album" albumData={fetchTopAlbum} />
      <CardSection title="New Album" albumData={fetchNewAlbum} />
      <SongsCardSection title="Songs" albumData={fetchSongs} />
      <FAQSection title="FAQs" />
    </div>
  );
}

export default Body;
