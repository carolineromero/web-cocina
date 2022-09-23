import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { ContainerFotoCarrusel, ImagenCarruselSmall } from "../Carrusel/Carrusel.styled";


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ContainerFotoCarrusel>
            <ImagenCarruselSmall src="https://pbs.twimg.com/media/EwylniZXEAMnbIv?format=jpg&name=large"
              alt="First slide"/>
            </ContainerFotoCarrusel>
      
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      
      <Carousel.Item>
        <ContainerFotoCarrusel>
          <ImagenCarruselSmall src="https://pbs.twimg.com/media/EpTrKWUW4AEB9e7?format=jpg&name=large"
          alt="Second slide"/>
         </ContainerFotoCarrusel>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ContainerFotoCarrusel>
          <ImagenCarruselSmall src="https://pbs.twimg.com/media/Elq2h6mWoAEL2Dk?format=jpg&name=900x900"
          alt="Third slide"/>
          </ContainerFotoCarrusel>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ContainerFotoCarrusel>
          <ImagenCarruselSmall src="https://pbs.twimg.com/media/EaVoXKyWoAEsoAU?format=jpg&name=large"
          alt="First slide"
        />
        </ContainerFotoCarrusel>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;