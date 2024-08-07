import React from 'react';
import Nome from './components/Nome'
import Curso from './components/Curso'
import EstadoCidade from './components/EstadoCidade'
import Button from './components/Button'

import './App.css';

export default props=>{
  return (
   
   <div>
        <div className='display'>
          <h3>Cadastro de Ingressantes</h3>
          <Nome></Nome>
          <Curso></Curso>
          <EstadoCidade></EstadoCidade>
          <Button></Button>
        </div>
        
    </div>
  )
}


