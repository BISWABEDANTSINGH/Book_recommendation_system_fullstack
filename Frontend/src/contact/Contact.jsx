import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Get in <span className="text-pink-500">Touch</span>
          </h1>
          <p className="mt-12">
            We'd love to hear from you! Whether you have a question about our courses,
            need assistance, or just want to share feedback — feel free to reach out.
            Our team is always here to help you make the most of your learning journey.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 flex justify-center">
          <form className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-left text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
