import styled from 'styled-components';
import Theme from '../../global/theme';
import LightMango from '../Assets/mangobackground.png';
import DarkMango from '../Assets/darkmango.png'


export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;

  @media (max-width: 768px){
    flex-direction: column;
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
  align-content: space-between;
  align-self: center;

`

export const NamePrice = styled.h2`
  font-family: ${Theme.fonts.family};
  font-size:40px;
  width: 100%;
  text-align: center;
  color: ${({isPink}) => isPink ? Theme.colors.lightYellow : Theme.colors.orange};
`

export const ProductPicture = styled.div`
  width: 100%;
  height: 65%;
  background-image: url(${props => props.picture});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 50%;
`

export const MangoDiv = styled.div`
  width: 26vw;
  height: 26vw;
  z-index: 10;
  position: absolute;
  background-image: url(${({isApproved}) => isApproved ? DarkMango : LightMango});
  top: 125%;
  left: 37%;
`