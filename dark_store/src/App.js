import React from 'react'
import Nav from './comp/nav'
import Carrousel from './comp/carrousel'
import {BrowserRouter} from 'react-router-dom'
const App = () => {
  return (

    <> 
    
    <BrowserRouter>

    <Nav />
    <Carrousel />
    
    
    </BrowserRouter>
    
     </>
  
   )

}

export default App


