import React, { useState } from 'react';
import './EstadoCidade.css'

const EstadoCidade = {
  'São Paulo': ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
  'Rio de Janeiro': ['Angra dos Reis', 'Niterói', 'Itaboraí'],
  'Minas Gerais': ['Belo Horizonte', 'Monte Azul', 'Muzambinho']
};

const EstadosCidades = () => {
  const [selecioneEstado, setEstado] = useState('');
  const [selecioneCidade, setCidade] = useState('');

  const Estado = (event) => {
    setEstado(event.target.value);
    setCidade('');
  };

  const Cidade = (event) => {
    setCidade(event.target.value);
  };


  return (
    <div className='DEstadoCidade'>
      <label>
        <br />Estado:
        <select value={selecioneEstado} onChange={Estado}>
          <option value="" disabled>Selecione um estado</option>
          {Object.keys(EstadoCidade).map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
       <br /> Cidade:
        <select value={selecioneCidade} onChange={Cidade} disabled={!selecioneEstado}>
          <option value="" disabled>Selecione uma cidade</option>
          {selecioneEstado && EstadoCidade[selecioneEstado].map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default EstadosCidades;
