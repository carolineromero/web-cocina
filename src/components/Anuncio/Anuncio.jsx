import React from 'react';
import { AnuncioContainer, AnuncioTitulo } from './Anuncio.styled';
import AnuncioImg from '../../assets/img/publi.png'

function Anuncio() {
  return (
    <AnuncioContainer>
        <AnuncioTitulo src={AnuncioImg} />
            
       
    </AnuncioContainer>
  )
}

export default Anuncio