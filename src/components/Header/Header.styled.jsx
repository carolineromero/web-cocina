import styled from 'styled-components';


export const HeaderContainer = styled.div`
  @media(min-width: 1024px) {
    list-style: none;
    display: flex;
    height:100px;
    background-color:#82889e;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: auto; }

    @media(min-width: 767px) and (max-width:1023px ){
    list-style: none;
    display: flex;
    height:100px;
    background-color:#82889e;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: auto;

    }
    @media(max-width: 767px) {
    list-style: none;
    display: flex;
    height:60px;
    background-color:#82889e;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    width: auto;
    }
   
`;


export const Text = styled.h1`

   @media(min-width: 1024px) {
        
    color: #ffffff;
    font-family: 'Marvel', sans-serif;
    font-size: 25px;
    letter-spacing: 0.1em;
    padding: 2rem;}

    @media(min-width: 767px) and (max-width:1023px ){
        color: #ffffff;
        font-family: 'Marvel', sans-serif;
        font-size: 25px;
        letter-spacing: 0.1em;
        padding: 2rem;}
    
    
   @media(max-width: 767px) {
    color: #ffffff;
    font-family: 'Marvel', sans-serif;
    font-size: 15px; 
    letter-spacing: 0.1em;
    padding: 0.5rem;}

    `;


export const Buscador = styled.div`
@media(min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;}

    @media(min-width: 767px) and (max-width:1023px ){
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;}


    @media(max-width: 767px) {
     display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    height: 50px;
    overflow-x: hidden;}

`;


export const InputBuscador = styled.input`
    @media(min-width: 1024px) {
    background-color:white;
    width: 201px;
    height: 26px;
    border: #BFC6DC 3px solid;
    border-radius: 10px;
    outline: none;}

    @media(min-width: 767px) and (max-width:1023px ){
    background-color:white;
    width: 201px;
    height: 26px;
    border: #BFC6DC 3px solid;
    border-radius: 10px;
    outline: none;

    }

    @media(max-width: 767px) {
    background-color:white;
    width: 150px;
    height: 26px;
    border: #BFC6DC 3px solid;
    border-radius: 10px;
    outline: none;}
`;



    export const Lupan = styled.img`
    @media(min-width: 1024px) {
    width:3rem ;
    padding-right: 1rem;}

    @media(min-width: 767px) and (max-width:1023px ){
        width:3rem ;
        padding-right: 1rem; }

    @media(max-width: 767px) {
        width:2rem ;
    padding-right: 1rem;}

`;

