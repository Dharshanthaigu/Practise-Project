import React from "react";
import Card from "./Card";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Carousel({ cards, type }) {
  return (
    <Swiper
      style={{
        "--swiper-navigation-size": "15px",
      }}
      // install Swiper modules
      modules={[Navigation]}
      className="swipercomp"
      spaceBetween={42}
      slidesPerView={7}
      navigation={true}
    >
      {cards.map((card) => (
        <SwiperSlide>
          <Card
            data={{
              title: card.title,
              image: card.image,
              follows: card.follows,
              songs: card.songs,
              likes: card.likes,
            }}
            key={card.id}
            type={type}
          />
        </SwiperSlide>
      ))}
      {/* <Carouselbutton /> */}
    </Swiper>
  );
}

export default Carousel;
