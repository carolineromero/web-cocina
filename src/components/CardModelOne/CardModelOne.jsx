import React from 'react'
import { ImgModelOne, ItemCardOne, ItemRecipeMarco, NameCardModelOne, PadreCardOne, TextModelOne } from './CardModelOne.styled'



function CardModelOne({img, nombre}) {
  return (

    <ItemCardOne>
      <PadreCardOne>
        <ItemRecipeMarco>
          <ImgModelOne src={img} alt="imagen de la receta" />
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