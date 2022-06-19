import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div>
        {
          conteudos.map((cont) => (
            <div key={cont.conteudo} className='Card'>
              <h3>{`O conteudo é: ${cont.conteudo}`}</h3>
              <p>{`Status: ${cont.status}`}</p>
              <p>{`Bloco: ${cont.bloco}`}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
export default Content;