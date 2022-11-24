import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import HeroComponent from './Hero'
import Card from './Card'
import data from './data'
import TypoPhone from './Typophone'
import Hero2 from './hero2'
import MacComponent from './MacComponent'
import LapHero from './LapHero'
import TypoLap from './TypoLap'
import LapCard from './LapCard'
import Footer from './Footer'
import { Outlet, Link } from "react-router-dom";
import Router from './Route'
import { BrowserRouter } from "react-router-dom";
import { AppBar } from '@mui/material'
const cards = data.map( item =>{
  return(
      <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      stock={item.stock}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  )
}
) 
function App() {
  return (
          <div>
          
          <Navbar/>
          
          <HeroComponent/>
          <Hero2/>
          <TypoPhone/>
            <section className="cards-list">
                {cards}
            </section>
            <MacComponent/>
            <LapHero/>
            <TypoLap/>
            <LapCard/>
            <Footer/>
          </div>
  )
}

export default App
