import React from 'react';
import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import {
  Container,
  Title,
  Description,
  Content
} from './Styles';
import Background from '../Assets/background.png';

function SearchPage(){
  const onSearch = value => console.log(value);
  const { Search } = Input;

  return(
    <Container img={Background}>
      <Content>
        <Title><b>Taxa Rosa</b> é o preço que se paga por ser consumidora</Title>
        <Description id='big'>Produtos de cuidados pessoais com marketing direcionado para mulheres são cerca de 13% mais caros do que produtos exatamente iguais direcionados para homens ou unissex.
        Quer saber como ele pode afetar suas compras? Comece procurando um produto:</Description>
        <Description id='short'>Quer saber como ele pode afetar suas compras? Comece procurando um produto:</Description>
        <Space id='search'>
          <Search placeholder="Digite aqui nome do produto" size='large' onSearch={onSearch} enterButton id='input'/>
        </Space>
      </Content>
    </Container>
  )
}

export default SearchPage;