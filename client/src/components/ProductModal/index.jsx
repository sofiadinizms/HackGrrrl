import React, { useState, useEffect } from 'react';
import ProductsBrandRelated from '../ProductsBrandRelated';
import { ContainerModal, SubTitle, TitleModal, ContainerInfo } from './styles';
import productExample from '../Assets/gillete_example.png';
import aos from 'aos';


function ProductModal({ title, subtitle, image }) {
    aos.init();
    return (
        <ContainerModal data-aos="fade-up">
            <img src={productExample} />
            <ContainerInfo>
                <div>
                <TitleModal>Gillete Venus</TitleModal>
                <SubTitle>Gillete</SubTitle>
             </div>
            <ProductsBrandRelated />
            <ProductsBrandRelated />
            <ProductsBrandRelated />
            </ContainerInfo>
        </ContainerModal>
    )
}

export default ProductModal;