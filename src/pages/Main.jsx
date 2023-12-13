import React from 'react'
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default Main