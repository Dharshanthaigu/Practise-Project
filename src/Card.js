import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="card_details">
        <span className="card_title">
          <h3 className="topalbum">Top Album</h3>
          <h5 className="show">show all</h5>
        </span>
        <div className="album_card">
          <div className="card_border">
            <div className="card_data">
              <img
                src="https://www.istockphoto.com/photo/retro-music-background-gm887280896-246265587?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmusic-album&utm_term=music%20album%3A%3A%3A"
                alt="cardimage"
                className="cardimage"
              />
              <button className="cardbutton">
                <span className="card_button_text">100 Follows</span>
              </button>
            </div>
            <div className="cardtext">
              <span>New Bollywood</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
