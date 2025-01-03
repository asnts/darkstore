import React from 'react'
import "./card.css"

export const Card = ({
  imgSrc,
  imgAlt,
  tituloProduto,
  botaoCard,
  descricao

}) => { 

  return (
    <>
     <div className='containerCard'>
        <img src={imgSrc} alt={imgAlt} className='imagemCard' />
        <h3 className='tituloProduto'>{tituloProduto}</h3>
        <button className='botaoCard'>{botaoCard}</button>
        <p className='descricaoCard'>{descricao}</p>
        
    </div>
    
    </>
   
  )
}
