import React from "react";
//import FilterSong from "./FilterSong";
import { useEffect, useState } from "react";
import FilterSong from "./FilterSong";
import Carousel from "./Carousel";

function SongsCardSection({ title, albumData, filterSource, type }) {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

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

    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilter([...filter, ...data]);
      });
    }
  }, []);

  //console.log(filter, "songs");
  const filteredData = cards.filter((card) =>
    selectedFilterIndex !== 0
      ? card.genre.key === filter[selectedFilterIndex].key
      : card
  );

  return (
    <>
      <div className="CardSection">
        <div className="card_title">
          <span className="topalbum">{title}</span>
        </div>
        {filterSource && (
          <FilterSong
            filter={filter}
            setSelectedFilterIndex={setSelectedFilterIndex}
            selectedFilterIndex={selectedFilterIndex}
          />
        )}
        <div className="songSection">
          <div id="carousel_Card">
            <Carousel cards={filteredData} type={type} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SongsCardSection;
