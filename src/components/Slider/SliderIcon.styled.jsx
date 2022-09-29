import styled from "styled-components";
import { motion } from "framer-motion";



export const SliderContainer = styled(motion.div)`
  
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    width: 100vw;
    overflow-x: scroll;
    &::-webkit-scrollbar {display: none;}
    height: 150px;
    
  
`;

export const Slider = styled(motion.div)`
  
    display: flex;
    flex-wrap: nowrap;
    cursor: grab;
    width: 100%;
    margin-left:10%;
    height: 100%;
    
`;


export const Item = styled(motion.div)`
   @media(min-width: 1024px) {
  
    max-width: 100px;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction:column;
    width: 60px;
    height: 60px;
    margin: 20px 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    box-shadow: 0 0 10px #dfdfdf;}

    @media(min-width: 767px) and (max-width:1023px ){
    height: 100px;
    max-width: 100px;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction:column;
    width: 60px;
    height: 60px;
    margin: 20px 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    box-shadow: 0 0 10px #dfdfdf;
    }

    @media(max-width: 767px) {
        height: 100px;
    max-width: 100px;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction:column;
    width: 40px;
    height: 40px;
    margin: 20px 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    box-shadow: 0 0 10px #dfdfdf;
    }
`;

export const ImgSlider = styled.img`
   @media(min-width: 1024px) {
   height:55px;
   pointer-events: none; /*esto hace que no puedas seleccionar una imagen y arrastrarla*/
   margin:-30px;}

   @media(min-width: 767px) and (max-width:1023px ){
    height:60px;
   pointer-events: none; /*esto hace que no puedas seleccionar una imagen y arrastrarla*/
   margin:-30px;
   }

   @media(max-width: 767px) {
    height:30px;
   pointer-events: none; /*esto hace que no puedas seleccionar una imagen y arrastrarla*/
   margin:-15px;}
   
`;

export const Text = styled.h2`
   @media(min-width: 1024px) {
   color: #596388;
    font-family: 'Marvel', sans-serif;
    font-size: 19px;
    margin-top: 9px;}
    
    @media(min-width: 767px) and (max-width:1023px ){
    color: #596388;
    font-family: 'Marvel', sans-serif;
    font-size: 19px;
   
    }
    
    @media(max-width: 767px) {
    color: #596388;
    font-family: 'Marvel', sans-serif;
    font-size: 19px;
    margin-top: 25px
    }
    
    
`;
