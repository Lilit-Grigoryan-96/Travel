import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Offers from "./Components/Offers/Offers";
import Popular from "./Components/Popular/Popular";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
           <Footer />
    </>
  );
};

export default App;
