import React, { useState } from 'react';
import Example1 from '../Assets/gillete_example.png';
import {
  Container,
  Side,
  Content,
  MangoDiv,
  NamePrice,
  ProductPicture
} from './Styles';

function PriceComparison(){
  const [approved, setApproved] = useState(true);

  return(
    <Container>
      <Side isPink>
        <Content>
          <NamePrice isPink>Gillete Venus</NamePrice>
          <ProductPicture picture={Example1}/>
          <NamePrice isPink>R$22,34</NamePrice>
        </Content>
      </Side>
      <MangoDiv isApproved={approved}/>
      <Side>
        <NamePrice> UIIIIIIII</NamePrice>
      </Side>
    </Container>
  )
}

export default PriceComparison;