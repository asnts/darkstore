import React from 'react'
import "./card.css"

export const Card = ({
  imgSrc,
  imgAlt,
  botaoCard,
  descricao

}) => { 

  return (
    <>
     <div className='containerCard'>
        <img src={imgSrc} alt={imgAlt} className='imagemCard' />
        <button className='botaoCard'>{botaoCard}</button>
        <p className='descricaoCard'>{descricao}</p>
        
    </div>
    
    </>
   
  )
}
