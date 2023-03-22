import React, { useState, useEffect } from "react";
import Card from "./Card";
import Carousel from "./Carousel";

function CardSection({ title, albumData, type }) {
  const [isShowAll, setISShowAll] = useState(false);
  const [cards, setCards] = useState([]);
  const handleToggle = () => {
    setISShowAll((prevState) => !prevState);
  };

  useEffect(() => {
    // albumData().then((data) => {
    //   // console.log("data getting passed", data);
    //   setCards(data);
    // });
    //IIFE method in useEffect for async/await
    (async () => {
      const data = await albumData();
      setCards(data);
    })();
  }, []);

  return (
    <div className="CardSection">
      <div className="card_title">
        <span className="topalbum">{title}</span>
        <button className="showbtn" onClick={handleToggle}>
          {" "}
          <span className="show">{isShowAll ? "Show All" : "Collapse"}</span>
        </button>
      </div>
      <div>
        <>
          {isShowAll ? (
            <div className="card">
              {cards.map((card) => (
                <Card
                  data={{
                    title: card.title,
                    image: card.image,
                    follows: card.follows,
                    songs: card.songs,
                  }}
                  key={card.id}
                  type={type}
                />
              ))}
            </div>
          ) : (
            <div id="carousel_Card">
              <Carousel cards={cards} type={type} />
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default CardSection;
