import React from 'react'
import { ContainerModelTwo, DescripcionModelTwo, ImgModelTwo, ItemCardTwo, ItemRecipeMarco, ItemRecipeMarcoTwo, NameCardModelTwo, PadreCardTwo, TextModelTwo } from './CardModelTwo.styled'



function CardModelTwo({img, nombre, descripcion}) {
  return (

      <ItemCardTwo>
        <PadreCardTwo>
          <ItemRecipeMarco>
            <ImgModelTwo src={img} alt="imagen de la receta" />
          </ItemRecipeMarco>
        <TextModelTwo>
          <NameCardModelTwo>{nombre}</NameCardModelTwo>
          <DescripcionModelTwo>{descripcion}</DescripcionModelTwo>
        </TextModelTwo>
        </PadreCardTwo>
      </ItemCardTwo>
  )
}

export default CardModelTwo