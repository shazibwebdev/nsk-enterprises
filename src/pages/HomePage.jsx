import React from 'react'
import Header from '../components/layout/Header'
import FeaturedCategories from '../components/layout/FeaturedCategories'
import FeaturedProducts from '../components/layout/FeaturedProducts'
import WhyChooseUs from '../components/layout/WhyChooseUs'
import DealSection from '../components/layout/DealSection'
import VideoSection from '../components/layout/VideoSection'
import Footer from '../components/layout/Footer'
import AnimatedPage from '../components/common/AnimatedPage'

function HomePage() {
  return (
    <AnimatedPage>
      <Header />
      <div className="home-page">
        <FeaturedCategories />
        <FeaturedProducts />
        <DealSection />
        <VideoSection />
      </div>
      <WhyChooseUs />
    </AnimatedPage>
  )
}

export default HomePage