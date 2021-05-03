import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Example1 from '../Assets/gillete_pink.png';
import Example2 from '../Assets/gillete_grey.png';
import GoldStar from '../Assets/star.png';
import Background from '../Assets/colors_background.png';
import Vertical from '../Assets/background_vertical.png';
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
  const [product, setProduct] = useState([]);

  const loadProduct = async() => {
    const res = await axios.get('http://localhost:3001/api/products');
    setProduct(res.data);
  }

  useEffect(() => {
    loadProduct();
  }, [])

  return(
    <>
    {product?.map(({_id, name,name2, price1, price2, image}) => (
      <Container img={Background} vert={Vertical}>
        <Side isPink>
          <Content>
            <NamePrice name isPink>{name}</NamePrice>
            <ProductPicture src={Example1}/>
            <NamePrice isPink>{price1}</NamePrice>
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
              <NamePrice name isPink>{name}</NamePrice>
              <NamePrice isPink>{price1}</NamePrice>
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
            <NamePrice name>{name2}</NamePrice>
            <ProductPicture src={Example2} />
            <NamePrice>{price2}</NamePrice>
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
              <NamePrice name>{name2}</NamePrice>
              <NamePrice>{price2}</NamePrice>
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
    ))}
  </>
  )
}

export default PriceComparison;