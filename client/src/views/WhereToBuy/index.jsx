import React from 'react';
import { ProductModal } from '../../components';
import { ChoiceIsYour, Container, RecommendBrand, ImgIconContainer, Title, Description, ContainerIconBottom } from './styles';
import Icon from '../../components/Assets/Vector.svg';

function WhereToBuy() {
    return (
        <>
        <Container>
            <ImgIconContainer href="#">
                <img src={Icon} />
            </ImgIconContainer>
            <ChoiceIsYour>
                <Title>onde comprar</Title>
                <Description>a escolha é sua!</Description>
                <ProductModal />
                <ProductModal />
            </ChoiceIsYour>
            <RecommendBrand>
                <Title className='recommend'>recomendados</Title>
                <Description className='recommend'>produtinhos livres de taxa rosa para você :)</Description>
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