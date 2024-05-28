import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PopularCard from '../components/PopularCard'

const Home = () => {
  return (
    <div className='home bg-black'>
      <Hero />
      <Features />
      <PopularCard />
    </div>
  )
}

export default Home
