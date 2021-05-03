import React from 'react';
import Insta from '../Assets/instagram.png';
import Facebook from '../Assets/facebook.png';
import LinkedIn from '../Assets/linkedin.png';
import{
  Container,
  MangaRosa,
  SocialMedia,
  SocialContainer
} from './Styles';
import Logo from '../Assets/logo.png';

function Footer(){
  return(
    <Container>
      <MangaRosa src={Logo}/>
      <SocialContainer>
        <SocialMedia src={LinkedIn} alt='LinkedIn do Manga Rosa'/>
        <a href='https://www.instagram.com/desrosese/'><SocialMedia src={Insta} alt='Instagram do Manga Rosa' /></a>
        <SocialMedia src={Facebook} alt='Facebook do Manga Rosa' />
      </SocialContainer>
    </Container>
  )
}

export default Footer;