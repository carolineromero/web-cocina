import styled from "styled-components";
import { motion } from "framer-motion";



export const SliderContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export const Slider = styled(motion.div)`
    display: flex;
    cursor: grab;

`;


export const Item = styled(motion.div)`
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
`;

export const ImgSlider = styled.img`
    height:60px;
   pointer-events: none; /*esto hace que no puedas seleccionar una imagen y arrastrarla*/
   margin:-30px;
`;

export const Text = styled.h2`
    color: #596388;
    font-family: 'Marvel', sans-serif;
    font-size: 19px;
    margin-top: 15px;
    
    
    
`;
