import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import NewArrivals from '../components/newArrivals/NewArrivals'
import BestSeller from '../components/bestSeller/BestSeller'
import Latest from '../components/latestBlog/Latest'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <NewArrivals/>
      <BestSeller/>
      <Latest/> 
    </div>
  )
}

export default Home