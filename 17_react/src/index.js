import React from 'react';
import ReactDom from 'react-dom';

// import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'

// // import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// import Multi from './componentes/Multiplos'

// ReactDom.render(
//   <div>
//     <BomDia nome="Guilherme"/>
//     <Multi.BoaTarde nome="Ana"/>
//     <Multi.BoaNoite nome="Bia"/>
//   </div>,
//   document.getElementById('root')
// )

// $('<h1>').html('React 2')

// componentes com classes sendo importados
import Saudacao from './componentes/Saudacao'

ReactDom.render(
  <div>
    <Saudacao tipo="Bom dia" nome="João" />
  </div>,
  document.getElementById('root')
)