import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "./CardSection";
import SongsCardSection from "./SongsCardSection";
import { fetchNewAlbum, fetchTopAlbum, fetchSongs, fetchFilter } from "../Api";
import FAQSection from "./FAQSection";
import AudioPlayer from "./AudioPlayer";

function Body() {
  return (
    <div>
      <HeroSection />
      <CardSection title="Top Album" albumData={fetchTopAlbum} type="album" />
      <CardSection title="New Album" albumData={fetchNewAlbum} type="album" />
      <SongsCardSection
        title="Songs"
        albumData={fetchSongs}
        filterSource={fetchFilter}
        type="songs"
      />
      <FAQSection title="FAQs" />
      <AudioPlayer />
    </div>
  );
}

export default Body;
