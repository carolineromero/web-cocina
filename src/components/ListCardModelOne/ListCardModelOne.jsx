import React, { useState, useEffect } from 'react'
import CardModelOne from '../CardModelOne/CardModelOne';
import { ListContainer } from './ListCardModelOne.styled';
import axios from 'axios';

function ListCardModelOne() {
    
/*  console.log("recetaApi") */

const [recipesApi, setRecipesApi] = useState([]);
/* function filterByNum (recipes){
   
    let filterRecipes = []
    filterRecipes= recipes.map ((e, index)=>{
        if( index <=4 ){
            return e
        }
    })
    return filterRecipes
} */
    useEffect (()=>{
        axios.get("http://localhost:3000/categoriesRecipe")
        .then ((res)=> {
            setRecipesApi(res.data)
        })

    },[])
  

  
   return(
    <ListContainer> 
        {recipesApi.filter((e,index)=> index < 4).map ((item,index)=> (
            <CardModelOne key={index} nombre={item.nombre} img={item.img} />

        ))}
        
    </ListContainer>
  )  
}

export default ListCardModelOne