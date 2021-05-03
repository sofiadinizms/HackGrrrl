import React, {useState} from 'react';
import {ButtonContact, ModalContact} from './styles';

function Form(){
const [openModal, setOpenModal] = useState(false);
return(
<>
  <ButtonContact onClick={()=>setOpenModal(!openModal)}>contate-nos</ButtonContact>  
  {(openModal) &&(
    <ModalContact>
    <p>Insira seu nome</p>
      <input type='text' placeholder='Digite aqui'></input>

      <p>E-mail</p>
      <input type='text' placeholder='Digite aqui'></input>

      <p>Nome dos produtos</p>
      <input type='text' placeholder='Digite aqui'></input>

      <p>Mensagem</p>
      <textarea></textarea>
    <div className='buttons-container'>
    <button className='send-file'>Enviar anexo</button>  
      <button className='send'>Enviar</button>  
    </div>
      
    </ModalContact>
  )}
</>
)
}

export default Form;