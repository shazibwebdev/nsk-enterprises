import React from 'react'
import Navbar from '../components/layout/Navbar'
import ContactHero from '../features/contact/ContactHero'
import AnimatedPage from '../components/common/AnimatedPage'
import ContactForm from '../features/contact/ContactForm'
import ContactInfo from '../features/contact/ContactInfo'

function Contact() {
  return (
    <AnimatedPage>
      <ContactHero />
      <ContactInfo/>
      <ContactForm/>
    </AnimatedPage>
  )
}

export default Contact