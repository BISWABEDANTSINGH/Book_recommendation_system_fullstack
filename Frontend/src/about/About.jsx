import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            About <span className="text-pink-500">BookNest</span>
          </h1>
          <p className="mt-12 text-lg text--700">
            BookNest is your all-in-one online digital library and learning hub.
            We're committed to providing accessible, high-quality educational resources
            for learners of all ages and backgrounds. Whether you're looking for
            insightful books, engaging courses, or simply a place to explore new ideas —
            we've built BookNest with your curiosity in mind.
          </p>
          <p className="mt-6 text-lg text-white-700">
            Our mission is to foster a love for learning by offering free and premium
            content across a wide range of categories like technology, business, arts,
            health, and more. With a growing community of readers and learners, BookNest
            empowers individuals to grow, explore, and succeed — at their own pace.
          </p>
          <Link to="/">
            <button className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
