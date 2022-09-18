import React from 'react'
import images from '../exports/images'
import '../components/sliderIcon.css'
import { motion } from 'framer-motion'

function SliderIcon() {
  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-800}}>
            {images.map(image => (
            <motion.div className='item'>
                <img src={image} alt="" />
            </motion.div>
             ))}
        </motion.div>
       
    </motion.div>
  )
}

export default SliderIcon