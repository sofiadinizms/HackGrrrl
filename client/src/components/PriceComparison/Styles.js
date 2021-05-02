import styled from 'styled-components';
import Theme from '../../global/theme';
import LightMango from '../Assets/mangobackground.png';
import DarkMango from '../Assets/darkmango.png'


export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px){
    flex-direction: column;
    background-image: url(${props => props.vert});
  }
`

export const Side = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 50vw;
  background-color: ${({isPink}) => isPink ? Theme.colors.pink : Theme.colors.lightYellow};

  @media (max-width: 768px){
    height: 50vh;
    width: 100vw;
  }
`

export const Content = styled.div`
  height: 70%;
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-self: center;

  @media (max-width: 768px){
    display: none;
  }
`
export const SmallContent = styled.div`
  display: none;
  
  @media (max-width: 768px){
    width: 75%;
    height: 84%;
    display: flex;
    flex-flow: row nowrap;
    align-self: center;
    align-items: center;
  }
`

export const TextContent = styled.div`
  display: none;

  @media (max-width: 768px){
    width: 62%;
    height: 40%;
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    order: 2;
  }
`


export const NamePrice = styled.h2`
  font-family: ${Theme.fonts.family};
  font-size:40px;
  font-weight: 500;
  width: 100%;
  height: 10%;
  text-align: center;
  color: ${({isPink}) => isPink ? Theme.colors.lightYellow : Theme.colors.orange};
  margin: ${({name}) => name ? '0' : '0 0 10px 0'};
  order: ${({name}) => name ? 1 : 3};
  
  @media (max-width: 768px){
    order: ${({name}) => name ? 2 : 3};
    font-size: 27px;
    height: 20%;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 376px){
    font-size: 20px;
  }
  @media (max-width: 320px){
    font-size: 20px;
    margin: 0 0 6px 0;
  }
`

export const SmallPrice = styled.p`
  display: none;

  @media (max-width: 768px){
    font-family: ${Theme.fonts.family};    
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: black;
    order: 3;
    display: inline;
    width: 100%;

  }
`



export const ProductPicture = styled.img`
  width: 100%;
  height: 70%;
  margin: 0;
  object-fit: contain;
  order: 2;
  
  @media (max-width: 768px){
    order: 1;
    max-width: 30%;
    height: 100%;
  }
`

export const StarsDiv = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  order: 4;
`
export const StarsContainer = styled.div`
  width: 40%;
  min-width: 180px;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
`

export const Stars = styled.img`
  width: 25px;
  height: 25px;
`

export const MangoDiv = styled.div`
  width: 20vw;
  min-width: 80px;
  height: 20vw;
  min-height: 80px;
  background-size: 100%;
  z-index: 10;
  position: absolute;
  background-image: url(${({isApproved}) => isApproved ? DarkMango : LightMango});
  background-repeat: no-repeat;
  top: 125%;
  left: 38.5%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  padding-top: 50px;

  @media (max-width: 1025px){
    top: 135%;
    left: 32.5%;
  }

  @media (max-width: 769px){
    top: 133%;
    left: 30%;
    height: 280px;
    width: 280px;
  }

  @media (max-width: 737px){
    top: 138%;
    left: 30%;
    height: 180px;
    width: 180px;
    padding-top: 25px;
  }
  @media (max-width: 569px){
    top: 137%;
    left: 30%;
    height: 140px;
    width: 140px;
    padding-top: 25px;
  }
`
export const MangoSmall = styled.p`
  font-size: 20px;
  font-family: ${Theme.fonts.family};
  font-weight: 500;
  text-align: center;
  color: white;
  margin: 0;
  width: 70%;

  @media (max-width: 769px){
    font-size: 20px;
  }
  @media (max-width: 736px){
    font-size: 15px;
    line-height: 22px;
  }
  @media (max-width: 596px){
    font-size: 12px;
    line-height: 15px;
  }
`

export const MangoBig = styled(MangoSmall)`
  font-size: 50px;
  font-weight: 700;
  line-height: 56px;
  margin: 0;
  
  @media (max-width: 769px){
    font-size: 40px;
  }
  @media (max-width: 736px){
    font-size: 25px;
    line-height: 27px;
  }
  @media (max-width: 596px){
    font-size: 18px;
    line-height: 20px;
  }
`