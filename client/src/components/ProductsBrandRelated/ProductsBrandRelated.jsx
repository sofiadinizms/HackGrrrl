
import React from 'react';
import {Button, Container, InfoContainer, Price, Title} from './styles';

function ProducstBrandRelated({brand, price, link}){
return(
<Container>
    <InfoContainer>
        <Title>
            Amazon
        </Title>
        <Price>
            R$ 20,00
        </Price>
    </InfoContainer>
    <Button href={link}>{'> Comprar'}</Button>
</Container>
)
}

export default ProducstBrandRelated;