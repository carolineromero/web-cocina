import React from 'react';
import { AnuncioContainer, AnuncioTitulo } from './Anuncio.styled';

function Anuncio() {
  return (
    <AnuncioContainer>
        <AnuncioTitulo>
            <h2>Aquí va un anuncio</h2>
        </AnuncioTitulo>
    </AnuncioContainer>
  )
}

export default Anuncio