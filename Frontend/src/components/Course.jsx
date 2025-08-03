import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import list from "../../public/list.json";

function Course() {
  // You can define this if you only want to show specific categories:
  const selectedCategories = [
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
  ];

  // Filter list.json data by selected categories
  const filterData = list.filter((data) =>
    selectedCategories.includes(data.category)
  );

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Discover a wide variety of expertly designed free courses tailored to spark your curiosity and fuel personal or professional growth. Whether you're diving into a new subject or enhancing your current skills, our accessible and flexible learning options help you learn at your own pace. From technology and business to art and wellness, there's something for everyone — all without spending a dime. Start learning today and unlock your potential with ease.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
