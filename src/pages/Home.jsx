import React from 'react'
import Themetoggle from '../components/Themetoggle'
import Starbackground from '../components/Starbackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen'>
     <Themetoggle/>
     <Starbackground/>
     <Navbar/>
     <main>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <ContactSection/>
      
      
     </main>
     <Footer/>
    </div>
  )
}

export default Home