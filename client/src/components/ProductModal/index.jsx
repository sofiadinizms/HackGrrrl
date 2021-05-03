import React, { useState, useEffect } from 'react';
import ProductsBrandRelated from '../ProductsBrandRelated/ProductsBrandRelated';
import { ContainerModal, SubTitle, TitleModal, ContainerInfo } from './styles';
import productExample from '../Assets/gillete_example.png';
import aos from 'aos';


function ProductModal({ title, subtitle, image }) {
  
  aos.init();
  return (
    <ContainerModal data-aos="fade-up">
      <img src={productExample} alt='Produto Exemplo'/>
        <ContainerInfo>
          <div>
            <TitleModal>Exemplo</TitleModal>
            <SubTitle>aaaaa</SubTitle>
          </div>
        <ProductsBrandRelated />
        <ProductsBrandRelated />
        <ProductsBrandRelated />
      </ContainerInfo>
    </ContainerModal>
  )
}

export default ProductModal;