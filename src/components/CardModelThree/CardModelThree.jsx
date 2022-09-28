import React from 'react'
import { ImgModelThree, ItemCardThree, ItemRecipeMarcoThree, NameCardModelThree, PadreCardThree, TextModelThree } from './CardModelThree.styled'

function CardModelThree(img, nombre) {
  return (
    <ItemCardThree>
        <PadreCardThree>
            <ItemRecipeMarcoThree>
                <ImgModelThree src={img} alt="imagen de la receta" />
            </ItemRecipeMarcoThree>
        <TextModelThree>
            <NameCardModelThree> {nombre} </NameCardModelThree>    
        </TextModelThree>    

        </PadreCardThree>



    </ItemCardThree>
  )
}

export default CardModelThree