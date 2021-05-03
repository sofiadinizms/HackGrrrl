import React from 'react';
import { ProductModal } from '../../components';
import { ChoiceIsYour, Container, RecommendBrand, ImgIconContainer, Title, Description, ContainerIconBottom } from './styles';
import Icon from '../../components/Assets/Vector.svg';
import aos from 'aos';

function WhereToBuy() {
    aos.init();
    return (
        <>
        <ImgIconContainer href="#whereToBuy" >
                <img src={Icon} />
            </ImgIconContainer>
        <Container>
            <ChoiceIsYour id="whereToBuy" >
                <Title data-aos="fade-up" >onde comprar</Title>
                <Description data-aos="fade-up" >a escolha é sua!</Description>
                <ProductModal />
                <ProductModal />
            </ChoiceIsYour>
            <RecommendBrand >
                <Title data-aos="fade-up" className='recommend'>recomendados</Title>
                <Description data-aos="fade-up" className='recommend'>produtinhos livres de taxa rosa para você :)</Description>
                <ProductModal />
                <ProductModal />
            </RecommendBrand>

        </Container>
    <ContainerIconBottom>
    <ImgIconContainer href="#home" className='bottom-icon'>
         <img src={Icon} />
     </ImgIconContainer>
    </ContainerIconBottom>

     </>
    )
}

export default WhereToBuy;