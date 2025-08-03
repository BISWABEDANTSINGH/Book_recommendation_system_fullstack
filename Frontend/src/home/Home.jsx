import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import ChatWidget from "../components/chatwidget";


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      <ChatWidget/>
      
    </>
  );
}

export default Home;
