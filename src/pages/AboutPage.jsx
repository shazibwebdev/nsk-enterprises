import React from 'react'
import Navbar from '../components/layout/Navbar'
import AboutHero from '../features/about/AboutHero'
import AboutVideo from '../features/about/AboutVideo'
import AboutOurStory from '../features/about/AboutOurStory'
import AnimatedPage from '../components/common/AnimatedPage'

function About() {
  return (
    <AnimatedPage>
      <AboutHero />
      <div className="about-page">
        <AboutVideo />
        <AboutOurStory />
      </div>
    </AnimatedPage>
  )
}

export default About