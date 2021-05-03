import styled from 'styled-components';
import Theme from '../../global/theme';
import { ProductPicture } from '../PriceComparison/Styles';

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: hidden;

  @media (max-width: 768px){
    flex-direction: column;
  }
`
export const Content = styled.div`
  height: 70%;
  width: 74%;
  display: flex;
  flex-flow: row wrap;
  align-self: center;
  justify-content: space-between;

  @media (max-width: 1024px){
    width: 78%;
    height: 50%;
  }
  
  @media (max-width: 768px){
    width: 70%;
    height: 80%;
  }
`
export const WhiteCard = styled.div`
  width: 47%;
  height: 82%;
  display: flex;
  background-color: white;
  border-radius: 14px;
  flex-flow: row wrap;
  justify-content: center;
  box-shadow: 0 4px 10px 7px #CD3100;
`

export const Title = styled.h2`
  font-family: ${Theme.fonts.family};
  font-size: 48px;
  font-weight: medium;
  color: ${({isPink}) => isPink ? Theme.colors.lightYellow : Theme.colors.orange};
  height: 55px;
  width: 100%;
  text-align: center;

  @media (max-width: 1024px){
    font-size: 35px;
    height: 40px;
  }

  @media (max-width: 415px){
    font-size: 20px;
    height: 30px;
  }
`
export const Name = styled.h3`
  
  font-family: ${Theme.fonts.family};
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  width: 100%;
  height: 40px;
  padding-top: 5px;
  vertical-align: middle;
  order: ${({isName}) => isName ? 1 : 3};

  @media (max-width: 767px){
    font-size: 12px;
    padding-top: ${({isName}) => isName ? '10px' : 0};
  }
`
export const Picture = styled(ProductPicture)`
  width: 80%;
  height: 75%;
  order: 2;

  @media (max-width: 769px){
    height: 60%;
  }
`

export const FeatBlock = styled.div`
  height: 82%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
`
export const FeatItem = styled.div`
  height: 13%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`

export const OrangeCheck = styled.img`
  margin-top: 1%;
  height: 3vw;
  width: 3vw;
  display: inline;

  @media (max-width: 1025px){
    height: 5vw;
    width: 5vw;
  }
`

export const FeatName = styled.p`
  width: 80%;
  height: 100%;
  font-family: ${Theme.fonts.family};
  font-weight: 400;
  color: ${Theme.colors.orange};
  font-size: 36px;
  text-align: left;

  @media (max-width: 737px){
    font-size: 18px;
  }
`


