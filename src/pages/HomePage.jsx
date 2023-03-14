import React from "react";
import Barista from "../components/Barista";
import Footer from "../components/Footer";
import Handcrafte from "../components/Handcrafte";
import Header from "../components/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <Handcrafte />
      <Barista />
      <Footer />
    </div>
  );
}

export default HomePage;
