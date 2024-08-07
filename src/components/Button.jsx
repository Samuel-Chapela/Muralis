import React, { useState } from 'react';
import './Button.css'

const MessageButton = () => {
  const [Mensagem, setMensagem] = useState(false);

  const AcaoClick = () => {
    setMensagem(true);
    setTimeout(() =>{
        setMensagem(false)
    setTimeout(()=>{
      window.location.reload()
    }, 1000)
    }, 3500)
  };

  const AtualizarPage = () =>{
    window.location.reload();
}

  return (
    <div>
       <button className="botao1" onClick={AtualizarPage}>Voltar</button>
      <button className='botao2' onClick={AcaoClick}>Gravar</button>
      {Mensagem && <p className='message'>Dados Gravados!</p>}
    </div>
  );
};

export default MessageButton
