import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../../components/About/About";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <>
      <HeroSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <About />
    </>
  );
};

export default Home;
