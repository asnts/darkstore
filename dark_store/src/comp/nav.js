import React from 'react'
import { FaCrow  } from 'react-icons/fa';
import './nav.css'
const Nav = () => {
  return (

    <>
    <div className='header'> 
<div className='top_header'>
  <div className='icon'>
  <FaCrow />
  </div>

  <div className='info'>
    <h3>Dark Store</h3>
  </div>
   </div>

   <div className='mid_header'>
    <div className='logo'>
      <img src='image/raven.png' alt='logo_raven' height='80px' width='80px'></img>
    </div>
   </div>



    </div>
    
    </>
    
  
   )

}

export default Nav