import styled from "styled-components";


export const ListContainer = styled.div`
    @media(min-width: 1024px) {
 margin:0 px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */ 
  }
   width: 100%;
   height: 200px;}

   @media(min-width: 767px) and (max-width:1023px ){ 
      margin:0 px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */ 
  }
   width: 100%;
   height: 420px;}

   @media(max-width: 767px) {
      margin:0 px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */ 
  }
   width: 100%;
   height: 250px;}


`;

