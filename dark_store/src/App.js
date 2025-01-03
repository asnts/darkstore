import React from 'react'
import Nav from './comp/nav'
import Carrousel from './comp/carrousel'
import {Card} from './comp/card'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (

    <> 
    
    <BrowserRouter>

    <Nav />
    <Carrousel />
    <Card imgSrc="image/saia.jpg"
     imgAlt= "imagem card" 
     tituloProduto="Saia"
     botaoCard="Adicionar a sacola" 
     descricao="Descrição do produto" />



    
    </BrowserRouter>
    
     </>
  
   )

}

export default App


