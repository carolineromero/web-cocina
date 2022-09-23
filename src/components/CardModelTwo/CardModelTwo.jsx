import React from 'react'
import { ContainerModelTwo, ImgModelTwo, ItemRecipeMarcoTwo, TextModelTwo } from './CardModelTwo.styled'



function CardModelTwo() {
  return (
        <ContainerModelTwo>
                <ItemRecipeMarcoTwo>
                    <ImgModelTwo src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/280px-Full_Moon_Luc_Viatour.jpg"/> 
                </ItemRecipeMarcoTwo>    
                 <TextModelTwo>
                  Galletas lalala
                  </TextModelTwo>

        </ContainerModelTwo>
  )
}

export default CardModelTwo