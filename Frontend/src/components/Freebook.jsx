import React, { useEffect, useState } from "react";
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";
import Cards from "./Cards";

function Freebook() {
 const [selectedCategories, setSelectedCategories] = useState([
  "Free",
  "Fantasy",
  "Horror",
  "Music",
  "Romance",
  "Technology",
  "Self-Help",
  "History",
  "Finance",
  "Science Fiction"
]);


  // Filter local JSON
  const filterData = list.filter((data) => selectedCategories.includes(data.category));

  // Optional: Fetch from API as well
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) =>
          selectedCategories.includes(data.category)
        );
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    };
    getBook();
  }, [selectedCategories]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8">
      <h1 className="text-xl font-semibold pb-2">Books in: {selectedCategories.join(", ")}</h1>
      <p className="mb-4">Explore books across selected categories.</p>

      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
