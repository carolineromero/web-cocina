import React from 'react'
import { Link } from 'react-router-dom';
import { FacebookLogo, FooterContainer, InstaLogo, RrssContainer, TwitterLogo, YoutubeLogo } from './Footer.styled'
import FacebookIcon from '../../assets/img/Footer/facebook.png';
import YoutubeIcon from '../../assets/img/Footer/youtube.png'; 
import InstaIcon from '../../assets/img/Footer/instagram.png';
import TwitterIcon from '../../assets/img/Footer/twitter.png';

function Footer() {
  return (
        <div>
        <FooterContainer>
                <RrssContainer>
                    
               {/*  <a href='https://www.youtube.com/watch?v=15jBo-SDqdg&list=PLu4H1TxATjOMFme68_HFIGL5j04_qId2R'>Hola</a>*/}

                {/*   <Link to="https://www.youtube.com/user/somethingiscooking"> fdfgd  </Link> 
                   */}
                    
                   <a href="https://www.instagram.com/somethingiscook/"  target="_blank"> <InstaLogo src= {InstaIcon}/> </a>

                   <a href ="https://www.youtube.com/user/somethingiscooking" target="_blank"> <YoutubeLogo src= {YoutubeIcon}/> </a>

                   <a href ="https://www.facebook.com/SomethingIsCooking/" target="_blank"> <FacebookLogo src= {FacebookIcon}/> </a>

                   <a href ="https://twitter.com/somethingiscook" target="_blank"> <TwitterLogo src= {TwitterIcon}/> </a>

                    
              </RrssContainer>

        </FooterContainer>
        </div>
  )
}

export default Footer