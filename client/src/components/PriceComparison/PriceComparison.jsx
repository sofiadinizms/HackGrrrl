import React, { useState } from 'react';
import Example1 from '../Assets/KENWCN.png';
import Example2 from '../Assets/gillete_grey.png';
import GoldStar from '../Assets/star.png';
import GreyStar from '../Assets/star_grey.png';
import LightStar from '../Assets/star_ly.png';
import Background from '../Assets/colors_background.png';
import Vertical from '../Assets/background_vertical.png'
import {
  Container,
  Side,
  Content,
  MangoDiv,
  NamePrice,
  StarsDiv,
  Stars,
  ProductPicture,
  StarsContainer,
  MangoSmall,
  MangoBig,
  SmallContent,
  TextContent,
  SmallPrice
} from './Styles';

function PriceComparison(){
  const [approved, setApproved] = useState(false);

  return(
    <Container img={Background} vert={Vertical}>
      <Side isPink>
        <Content>
          <NamePrice name isPink>Gillete Venus</NamePrice>
          <ProductPicture src={Example1}/>
          <NamePrice isPink>R$22,34</NamePrice>
          <StarsDiv>
            <StarsContainer>
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
            </StarsContainer>
          </StarsDiv>
        </Content>
        <SmallContent>
          <ProductPicture src={Example1}/>
          <TextContent>
            <NamePrice name isPink>Gillete Venus</NamePrice>
            <NamePrice isPink>R$22,34</NamePrice>
            <SmallPrice>preço médio</SmallPrice>
            <StarsDiv>
            <StarsContainer>
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
            </StarsContainer>
          </StarsDiv>

          </TextContent>
        </SmallContent>
      </Side>
      {approved ? 
      <MangoDiv isApproved={approved}>
        <MangoSmall>esse produto é</MangoSmall>
        <MangoBig>PINK TAX FREE</MangoBig>
        <MangoSmall>boa!:)</MangoSmall>
      </MangoDiv> 
      :
      <MangoDiv isApproved={!approved}>
      <MangoSmall>esse produto possui</MangoSmall>
      <MangoBig>33%</MangoBig>
      <MangoSmall><b>do seu valor em taxa rosa</b></MangoSmall>
    </MangoDiv>}
      <Side>
        <Content>
          <NamePrice name>Gillete Mach3</NamePrice>
          <ProductPicture src={Example2} />
          <NamePrice>R$14,99</NamePrice>
          <StarsDiv>
            <StarsContainer>
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
            </StarsContainer>
          </StarsDiv>
        </Content>
        <SmallContent>
          <ProductPicture src={Example2}/>
          <TextContent>
            <NamePrice name>Gillete Venus</NamePrice>
            <NamePrice>R$22,34</NamePrice>
            <SmallPrice>preço médio</SmallPrice>
            <StarsDiv>
            <StarsContainer>
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
              <Stars src={GoldStar} />
            </StarsContainer>
          </StarsDiv>

          </TextContent>
        </SmallContent>
      </Side>
    </Container>
  )
}

export default PriceComparison;