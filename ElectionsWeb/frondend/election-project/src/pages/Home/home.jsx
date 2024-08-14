import React from "react";
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
import AutoplaySlider from "./slider";
import Video from "./Video";
import About from "./About_us";
import FAQ from "./FQA";
import ChatBox from "../../components/Chatbox/Chatbox";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <AutoplaySlider />
        <Video />
        <About />
        <FAQ />
        <ChatBox />
      </main>
      <Footer />
    </>
  );
};
export default Home;
