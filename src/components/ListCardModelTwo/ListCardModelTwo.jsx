import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardModelTwo from '../CardModelTwo/CardModelTwo'
import { ListContainerTwo } from './ListCardModelTwo.styled';

function ListCardModelTwo() {
  const [recipesApi, setRecipesApi] = useState ([]);
    
  useEffect (()=>{
        axios.get("http://localhost:5000/categoriesRecipe")
        .then ((res)=> {
            setRecipesApi(res.data)
        })

    },[]) 
    
  
    return (
        <ListContainerTwo>
            {recipesApi.filter((e,index)=> index < 4).map ((item,index)=> (
                <CardModelTwo key={index} nombre={item.nombre} img={item.img} descripcion={item.descripcion} />
            )
            )}
   </ListContainerTwo>
  )
}

export default ListCardModelTwo