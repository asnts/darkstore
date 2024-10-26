import React from 'react'
import { HiSearchCircle } from "react-icons/hi";
import { BiSolidLogInCircle } from "react-icons/bi";

import './nav.css'
const Nav = () => {
  return (

    <>
      <div className='header'>
        <div className='top_header'>
          <div className='logo'>
            <img src='image/darkstore_logo.png' alt='logo_raven' height='80px' width='80px'></img>
          </div>
          <div className='search_box'>
            <input type='text' value='' placeholder='O que você busca?'></input>
            <button><HiSearchCircle /> </button>
          </div>
          <div className='user'>
            <div className='icon'></div>
            <BiSolidLogInCircle />
          </div>
          <div className='login_btn'></div>
          <button>Login</button>
        </div>


      </div>

      <div className='mid_header'>


      </div>

    </>


  )

}

export default Nav