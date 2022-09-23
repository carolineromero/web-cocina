import React from 'react'
import Header from '../components/Header/Header'
import SliderIcon from '../components/Slider/SliderIcon'
import Anuncio from '../components/Anuncio/Anuncio'
import UncontrolledExample from '../components/Carrusel/Carrusel'
import '../assets/styles/index.css';
import CardModelOne from '../components/CardModelOne/CardModelOne'
import CardModelTwo from '../components/CardModelTwo/CardModelTwo'
import Footer from '../components/Footer/Footer'



function Home() {
  return (
    <>
    <Header/>
    <UncontrolledExample/>
    <hr width="75%" color="black"/>
    <h2>¿Qué quieres cocinar hoy?</h2>
    <SliderIcon/>
    <Anuncio/>
    <h3>Recetas destacadas</h3>
    <CardModelOne/>
    <hr width="75%" color="black"/>
    <CardModelTwo/>
    <Footer/>
    
   
    </>
  )
}
export default Home