import styled from "styled-components";

export const ItemCardOne = styled.div`
    padding: 10px;
    padding-top: 1px;

`;

export const PadreCardOne = styled.div`
@media(min-width: 1024px) {
     padding: 10px 20px 30px;
    gap: 2px;
    background: linear-gradient(181.37deg, rgba(130, 136, 158, 0) -4.8%, #82889E 78.33%);
    border-radius: 5px;
    position: relative;
    width: 224px;
    height: 182px;
    margin: 2%;}

    @media(min-width: 767px) and (max-width:1023px ){
        padding: 10px 20px 30px;
    gap: 2px;
    background: linear-gradient(181.37deg, rgba(130, 136, 158, 0) -4.8%, #82889E 78.33%);
    border-radius: 5px;
    position: relative;
    width: 224px;
    height: 182px;
    margin: 2%;

    }

    @media(max-width: 767px) {
    padding: 10px 20px 30px;
    gap: 1px;
    background: linear-gradient(181.37deg, rgba(130, 136, 158, 0) -4.8%, #82889E 78.33%);
    border-radius: 5px;
    position: relative;
    width: 150px;
    height: 120px;
    margin: 2%;

    }

`;

export const ItemRecipeMarco = styled.div`
   @media(min-width: 1024px) {
    width: 100%;
    height: 80%;
    border-radius: 5%;
    overflow:hidden;
    position: relative;}

    @media(min-width: 767px) and (max-width:1023px ){
    width: 100%;
    height: 80%;
    border-radius: 5%;
    overflow:hidden;
    position: relative;
    }
    @media(max-width: 767px) {
    width: 100%;
    height: 90%;
    border-radius: 5%;
    overflow:hidden;
    position: relative;}
     
`;

export const ImgModelOne = styled.img`  
@media(min-width: 1024px) {  
    width:100%;
    height:100%;
    object-fit: cover;
    bottom: 0%;}

 @media(min-width: 767px) and (max-width:1023px ){
    width:100%;
    height:100%;
    object-fit: cover;
    bottom: 0%;}


@media(max-width: 767px) {
    width:100%;
    height:100%;
    object-fit: cover;
    bottom: 0%;}
`;

export const TextModelOne = styled.div`
@media(min-width: 1024px) {  
    position: relative;
    bottom: 30%;}

@media(min-width: 767px) and (max-width:1023px ){
     position: relative;
    bottom: 30%;}

 @media(max-width: 767px) {
    position: relative;
    bottom: 30%;}
`;

export const NameCardModelOne = styled.h2`
@media(min-width: 1024px) {  
margin-top:13%;
color:#fff;
font-size: 1.5rem;}

@media(min-width: 767px) and (max-width:1023px ){
    margin-top:13%;
color:#fff;
font-size: 1.5rem;}

@media(max-width: 767px) {
    margin-top:30%;
color:#fff;
font-size: 1rem;}
`;