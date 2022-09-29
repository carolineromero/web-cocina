import React from 'react'
import { ContainerDetail, ImgRecipe, IngredienteDetail, RecipeContainer, StepsRecipe, TitleRecipe } from './DetailRecipe.styled'



function DetailRecipe({nombre,descripcion, ingredientes}) {
  return (
  
    <RecipeContainer>
        <TitleRecipe> {nombre} </TitleRecipe>
        <ImgRecipe src={img} alt="imagen de la receta" />
      
        <ContainerDetail>
            <IngredienteDetail>{ingredientes}</IngredienteDetail>
            <StepsRecipe></StepsRecipe>
        </ContainerDetail>
        <YoutubeContainer></YoutubeContainer>

    </RecipeContainer>
  )
}


export default DetailRecipe