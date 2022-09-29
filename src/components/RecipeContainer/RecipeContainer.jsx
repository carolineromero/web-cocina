import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { recipesServices } from '../../services/recipeServices'
import DetailRecipe from '../DetailRecipe/DetailRecipe'



export const DetailRecipeNuevo =() =>{
  const [recipe, setRecipe] = useState([])
  const {id}= useParams();

  useEffect (
    ()=>{
      getRecipesById(id);
    },[]
  )


const getRecipesById=(id) =>{
  recipesServices.getRecipesById(id).then(()=>{
    setRecipe(res);
    console.log(res)
  })


  return (
    <>
    {recipe.map((item, index) =>(
      <DetailRecipe key={index} nombre={item.nombre} descripcion={item.descripcion} ingredientes={item.ingredientes}/>
    ))}

</> 
 )
}
}
export default DetailRecipeNuevo