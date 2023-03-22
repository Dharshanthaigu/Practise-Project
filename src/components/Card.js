import React from "react";
//import Carouselbutton from "./Carouselbutton";
import Tooltip from "@mui/material/Tooltip";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { title, image, follows, songs, slugs } = data;

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className="card_album">
              <div className="card_data">
                <img
                  src={image}
                  alt="CardImage"
                  className="cardimage"
                  loading="lazy"
                />
                <div className="cardbutton_data">
                  <button className="cardbutton">
                    <span className="card_button_text">{follows} Follows</span>
                  </button>
                </div>
              </div>
              <div className="cardtext">
                <span>{title}</span>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { title, image, likes } = data;
        return (
          <div className="card_album">
            <div className="card_data">
              <img
                src={image}
                alt="CardImage"
                className="cardimage"
                loading="lazy"
              />
              <div className="cardbutton_data">
                <button className="cardbutton">
                  <span className="card_button_text">{likes} Likes</span>
                </button>
              </div>
            </div>
            <div className="cardtext">
              <span>{title}</span>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
