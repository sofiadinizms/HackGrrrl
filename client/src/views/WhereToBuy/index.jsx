import React from 'react';
import { ProductModal } from '../../components';
import { ChoiceIsYour, Container, RecommendBrand } from './styles';

function WhereToBuy() {
    return (
        <Container>
            <ChoiceIsYour>
                <ProductModal />
                <ProductModal />
            </ChoiceIsYour>
            <RecommendBrand>
                <ProductModal />
                <ProductModal />
            </RecommendBrand>
        </Container>
    )
}

export default WhereToBuy;