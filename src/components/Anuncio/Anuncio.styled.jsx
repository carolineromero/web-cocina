import styled from "styled-components";

export const AnuncioContainer = styled.div`
@media(min-width: 1024px) {
    
     width: 100%;
     height: 10rem;
     margin-top:5%;
    display:flex;
    justify-content:center;}

     @media(min-width: 767px) and (max-width:1023px ){
   
     width: 100%;
     height: 10rem;
     margin-top:5%;}

     @media(max-width: 767px) {
    
     width: 100%;
     height: 2rem;
     margin-top:5%;
     display:flex;
    justify-content:center
     

     }

     

`;

export const AnuncioTitulo = styled.img`
    width:90%;
   margin:0;
   padding: 0;

   @media(max-width: 767px) {
    
   width:90%;
   margin:0;
   padding: 0;
   
   

    }
`;