import React from 'react'
import { HiSearchCircle } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


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
          <div className='login_btn'>
            <button><FaUser /></button>
          </div>

          <div className='cart'>
            <button><FaCartShopping /></button>
          </div>


        </div>

        <div className='mid_header'>
          <div className='mid_inicio'>
            <button>Início</button>
          </div>
          <div className='mid_feminino'>
            <button>Roupas Femininas</button>
          </div>
          <div className='mid_masculino'>
            <button>Roupas Masculinas</button>
          </div>
          <div className='mid_acessorios'>
            <button>Acessórios</button>
          </div>
        </div>


      </div>



    </>


  )

}

export default Nav