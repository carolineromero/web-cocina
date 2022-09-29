import styled from "styled-components";


export const ListContainerTwo = styled.div`
 @media(min-width: 1024px) {
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15px;}

@media(min-width: 767px) and (max-width:1023px ){ 
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15px;}

@media(max-width: 767px) {
    display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15px;
gap:2px}


`;