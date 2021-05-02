import React from 'react';
import{
  Container,
  MangaRosa
} from './Styles';
import Logo from '../Assets/logo.png';

function Footer(){
  return(
    <Container>
      <MangaRosa src={Logo}/>
    </Container>
  )
}

export default Footer;