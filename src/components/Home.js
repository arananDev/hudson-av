import HeroSection from "./HeroSection";
import React from 'react'
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProjectsSection from "./ProjectsSection";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
    
    </>
  )
}

export default Home