import styled from "styled-components";

export const ItemCardTwo = styled.div`
    /* padding-top: 1%;
    padding-left: 5%;
    padding-right: 5%; */

`;

export const PadreCardTwo = styled.div`
@media(min-width: 1024px) {
    padding: 10px 50px;
    gap: 2px;
    background: #D9D9D9;
    border-radius: 14px;
    position: relative;
    width: 800px;
     height: 200px; 
    margin: 1%;
    display: flex;}

    @media(min-width: 767px) and (max-width:1023px ){ 
        padding: 10px 50px;
    gap: 2px;
    background: #D9D9D9;
    border-radius: 14px;
    position: relative;
    width: 800px;
     height: 200px; 
    margin: 1%;
    display: flex;}

    @media(max-width: 767px) {
    padding: 10px 20px;
    gap: 2px;
    background: #D9D9D9;
    border-radius: 14px;
    position: relative;
    width: 360px;
     height: 120px; 
    margin: 1%;
    display: flex;
    overflow-x: hidden;}
`;

export const ItemRecipeMarco = styled.div`
   @media(min-width: 1024px) {
    width: 50%;
    height: 100%;
    border-radius: 5%;
    overflow:hidden;
    position: relative;}
  
    @media(min-width: 767px) and (max-width:1023px ){
     width: 50%;
    height: 100%;
    border-radius: 5%;
    overflow:hidden;
    position: relative;}

    @media(max-width: 767px) {
    width: 50%;
    height: 100%;
    border-radius: 5%;
    overflow:hidden;
    position: relative;}
`;

export const ImgModelTwo = styled.img`    

    width:100%;
    height:100%;
    object-fit: cover;
  
`;

export const TextModelTwo = styled.div`
  @media(min-width: 1024px) {
  width:40% ;
  display: flex;
  flex-direction: column;
  justify-content: center
    }


  @media(min-width: 767px) and (max-width:1023px ){
  width:40% ;
  display: flex;
  flex-direction: column;
  justify-content: center}

  @media(max-width: 767px) {
  width:40% ;
  display: flex;
  flex-direction: column;}

`;

export const NameCardModelTwo = styled.h2`
  @media(min-width: 1024px) {
color:#fff;
font-size: 1.5rem;
padding: 0px 30px;
display: flex;
justify-content: flex-start;}

@media(min-width: 767px) and (max-width:1023px ){
    color:#fff;
font-size: 1.5rem;
padding: 0px 30px;
display: flex;
justify-content: flex-start;}

@media(max-width: 767px) {
color:#fff;
font-size: 1rem;
padding: 1px 5px;
display: flex;
justify-content: flex-start;}


`;


export const DescripcionModelTwo =styled.h3`
 @media(min-width: 1024px) {
color:#000000;
font-size: 1rem;
display: flex;
justify-content: flex-start;

padding: 7px;}


@media(min-width: 767px) and (max-width:1023px ){
    color:#000000;
font-size: 1rem;
display: flex;
justify-content: flex-start;

padding: 7px;}


@media(max-width: 767px) {
color:#000000;
font-size: 0.7rem;
display: flex;
justify-content: flex-start;
margin-top: -12px;
padding:5px 2px 5px 6px}

      text-overflow: ellipsis;
      overflow: hidden;
`;
