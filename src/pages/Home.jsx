import React from 'react'
import Header from '../components/Header/Header'
import SliderIcon from '../components/Slider/SliderIcon'
import Anuncio from '../components/Anuncio/Anuncio'
import UncontrolledExample from '../components/Carrusel/Carrusel'
import '../assets/styles/index.css';
import Footer from '../components/Footer/Footer'
import ListCardModelOne from '../components/ListCardModelOne/ListCardModelOne'
import ListContainerTwo from '../components/ListCardModelTwo/ListCardModelTwo'





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
    <ListCardModelOne/>
    <hr width="75%" color="black"/>
    <ListContainerTwo/>
  
   
    <Footer/>
    
   
    </>
  )
}
export default Home