import React from 'react'
import BurgerIcon from '../../assets/img/Header/burger.png';
import LupaIcon from '../../assets/img/Header/lupa.png';
import { Burger, BurgerLogo, Buscador, HeaderContainer, InputBuscador, Lupan, Text } from './Header.styled'

function Header() {
  return (

    <HeaderContainer>
        <BurgerLogo>
              {/*  <Burger src={BurgerIcon} /> */}
              <Text>
                  SOMETHING IS COOKING
              </Text>
        </BurgerLogo>
        <Buscador>
       
                <Lupan src={LupaIcon} />
                <InputBuscador/>
           
        </Buscador>

    </HeaderContainer>

 /*    <div className="headerContainer">
      <div className="logoName">
          <img src={burgerbtn} alt="imagen cabecera" className='img-header' />

          <div className="logoContainer">
            <h1>SOMETHING IS COOKING</h1>
          </div>
      </div>
 
    
    </div> */
)

}

export default Header