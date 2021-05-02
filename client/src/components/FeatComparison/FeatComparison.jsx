import React from 'react';
import Example1 from '../Assets/gillete_pink.png';
import Example2 from '../Assets/gillete_grey.png';
import Check from '../Assets/check.png';
import {
  Container,
  Content,
  WhiteCard,
  Title,
  Picture,
  Name,
  FeatBlock,
  FeatItem,
  OrangeCheck,
  FeatName
} from './Styles';
import {Side} from '../PriceComparison/Styles';

function FeatComparison (){
  return(
    <Container>
      <Side isPink>
        <Content>
          <Title isPink>Aparência diferente...</Title>
          <WhiteCard>
            <Name isName>Gillete Venus</Name>
            <Picture src={Example1}/>
            <Name>R$22,34</Name>
          </WhiteCard>
          <WhiteCard>
            <Name isName>Gillete Mach3</Name>
            <Picture src={Example2}/>
            <Name>R$14,99</Name>
          </WhiteCard>
        </Content>
      </Side>
      <Side>
        <Content>
          <Title>...o mesmo produto.</Title>
          <FeatBlock>
            <FeatItem>
              <OrangeCheck src={Check} />
              <FeatName>Tres laminas</FeatName>
            </FeatItem>
            <FeatItem>
              <OrangeCheck src={Check} />
              <FeatName>Tres laminas</FeatName>
            </FeatItem>
            <FeatItem>
              <OrangeCheck src={Check} />
              <FeatName>Tres laminas</FeatName>
            </FeatItem>
          </FeatBlock>
        </Content>

      </Side>


    </Container>
  )
}

export default FeatComparison;