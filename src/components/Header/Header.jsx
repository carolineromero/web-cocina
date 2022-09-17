import React from 'react'
import burgerbtn from "../Header/burger.png"

function Header() {
  return (
    <div className="headerContainer">
      <div className="logoName">
          <img src={burgerbtn} alt="imagen cabecera" className='img-header' />

          <div className="logoContainer">
            <h1>SOMETHING IS COOKING</h1>
          </div>
      </div>
 
    
    </div>
)

}

export default Header