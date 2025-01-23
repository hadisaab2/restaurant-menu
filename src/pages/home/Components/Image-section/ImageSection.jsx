import React, { useState, useEffect } from 'react';
import Headerimg from './homepage.png'; 
import "./ImageSection.css"
export default function ImageSection() {
     
  return (
    <div className='imgheader-wrapper'>
          <img src={Headerimg} alt="ubgugbugb" className='imgheader' />
    
    </div>
  )
}
