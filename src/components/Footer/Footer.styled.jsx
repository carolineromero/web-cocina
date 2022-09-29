import styled from "styled-components";

export const FooterContainer = styled.div`
 @media(min-width: 1024px) {
    background-color:#82889e;
    width:100% ;
    height: 100px;
    padding: 5px;}

    @media(min-width: 767px) and (max-width:1023px ){
        background-color:#82889e;
    width:100% ;
    height: 100px;
    padding: 5px;}

    @media(max-width: 767px) {

    background-color:#82889e;
    width:100% ;
    height: 70px;
    padding: 5px;}
`;

export const RrssContainer = styled.div`
@media(min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;}

    @media(min-width: 767px) and (max-width:1023px ){
        display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;}

    @media(max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;}

`;

export const InstaLogo = styled.img`
 @media(max-width: 767px) {
    width:2.5rem ;}

`;

export const YoutubeLogo = styled.img`
    @media(max-width: 767px) {
    width:2.5rem ;}
`;

export const FacebookLogo = styled.img`
   @media(max-width: 767px) {
    width:2.5rem ;}
`;

export const TwitterLogo = styled.img`
   @media(max-width: 767px) {
    width:2.5rem ;}
`;