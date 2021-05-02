import React, { useState, useEffect } from 'react';
import ProductsBrandRelated from '../ProductsBrandRelated';
import { ContainerModal, SubTitle, TitleModal, ContainerInfo } from './styles';
import productExample from '../Assets/gillete_example.png';

function ProductModal({ title, subtitle, image }) {
    return (
        <ContainerModal>
            <img src={productExample} />
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