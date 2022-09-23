import React from 'react'
import { ContainerModelOne, ImgModelOne, ItemRecipeMarco, TextModelOne } from './CardModelOne.styled'

function CardModelOne() {
  return (
    <ContainerModelOne>
        <ItemRecipeMarco>
              <ImgModelOne src="https://pbs.twimg.com/media/EwylniZXEAMnbIv?format=jpg&name=large"
              alt="First slide"/> 
        </ItemRecipeMarco>
        <TextModelOne>
              Patatas Hasselback
        </TextModelOne>
    </ContainerModelOne>
    
  )
}

export default CardModelOne