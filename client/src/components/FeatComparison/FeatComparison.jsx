import {React,useState , useEffect} from 'react';
import axios from 'axios';
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
    {product?.map(({_id, name,name2,price1,price2, propertie1, propertie2, propertie4}) => (
    <Container>
      <Side isPink>
        <Content>
          <Title isPink>Aparência diferente...</Title>
          <WhiteCard>
            <Name isName>{name}</Name>
            <Picture src={Example1}/>
            <Name>{price1}</Name>
          </WhiteCard>
          <WhiteCard>
            <Name isName>{name2}</Name>
            <Picture src={Example2}/>
            <Name>{price2}</Name>
          </WhiteCard>
        </Content>
      </Side>
      <Side>
        <Content>
          <Title>...o mesmo produto.</Title>
          <FeatBlock>
            <FeatItem>
              <OrangeCheck src={Check} />
              <FeatName>{propertie1}</FeatName>
            </FeatItem>
            <FeatItem>
              <OrangeCheck src={Check} />
              <FeatName>{propertie2}</FeatName>
            </FeatItem>
            <FeatItem>
              <OrangeCheck src={Check} />
              <FeatName>{propertie4}</FeatName>
            </FeatItem>
          </FeatBlock>
        </Content>

      </Side>
    </Container>
    ))}
    </>
  )
}

export default FeatComparison;