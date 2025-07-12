import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  display: 'none'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: './banner-1.webp',
    caption: '50% Discount'
  },
  {
    url: './banner-2.webp',
    caption: '50% Discount'
  },
  {
    url: './banner-3.webp',
    caption: 'Pro Laptops'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide arrows={true}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;