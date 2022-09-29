import React from 'react'
import { Link } from 'react-router-dom'
import { ImgModelOne, ItemCardOne, ItemRecipeMarco, NameCardModelOne, PadreCardOne, TextModelOne } from './CardModelOne.styled'



function CardModelOne({img, nombre, id}) {
  return (

    <ItemCardOne>
      <PadreCardOne>
        <ItemRecipeMarco>
          <Link to={`/receta/${id}`}>
          <ImgModelOne src={img} alt="imagen de la receta" />
          </Link>
        </ItemRecipeMarco>
      <TextModelOne>
        <NameCardModelOne> {nombre}</NameCardModelOne>  
      </TextModelOne>  
      </PadreCardOne>
    </ItemCardOne>

    /* <ContainerModelOne>
        <ItemRecipeMarco>
              <ImgModelOne src={img}
              alt="First slide"/> 
        </ItemRecipeMarco>
        <TextModelOne>
              {nombre}
        </TextModelOne>
    </ContainerModelOne> */
    
  )
}

export default CardModelOne