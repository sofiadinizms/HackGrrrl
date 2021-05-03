import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Container, InfoContainer, Price, Title} from './styles';

function ProducstBrandRelated(brand, price){
  const [product, setProduct] = useState([]);

  const loadProduct = async() => {
    const res = await axios.get('http://localhost:3001/api/products');
    setProduct(res.data);
  }

  useEffect(() => {
    loadProduct();
  }, [])
  return(
    <Container>
      <InfoContainer>
        <Title>
          {brand}
        </Title>
        <Price>
          {price}
        </Price>
    </InfoContainer>
      <Button href=''>{'> Comprar'}</Button>
    </Container>
  )
}



export default ProducstBrandRelated;