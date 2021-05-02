import styled from 'styled-components';

export const Container = styled.div`
   display: flex;

   @media (max-width: 1074px){
       flex-direction: column;
   }

`;

export const ImgIconContainer = styled.a`
Width: 140px;
Height: 70px;
left: 46%;
padding: 45px;
margin: -156px 0px;
border-top-left-radius: 60px;
border-top-right-radius: 60px;
background: white;
position: absolute;
align-items: center;
display: flex;
padding: 45px;
cursor: pointer;

&.bottom-icon{
    transform: rotate(179deg);
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    border-top-left-radius: 0px;
border-top-right-radius: 0px;
    margin: 0px;
    @media (max-width: 688px){
    left: 40%;
}
@media (max-width: 480px){
    left: 35%;
}
}

@media (max-width: 1074px){
    margin: -90px 0px;
}

@media (max-width: 688px){
    left: 40%;
}
@media (max-width: 462px){
        left: 35%;
    }
`;
export const ChoiceIsYour = styled.div`
display: flex;
flex-direction: column;
height: auto;
    width: 50vw;
    background-color: #E7475A;
    align-items: center;

@media (max-width: 1074px){
    width: 100vw;
}

@media (max-width: 690px){
       padding: 40px;
   }
`;

export const ContainerIconBottom = styled.div`
    width: 50vw;
    background-color: #E7475A;
    align-items: center;
    height: 91px;

    @media (max-width: 1074px){
        background: none;
    }
`;

export const RecommendBrand = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 48.9vw;
align-items: center;

@media (max-width: 1074px){
    width: 100vw;
}
`;

export const Title = styled.h2`
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 2px;
color: #FFFBE9;
&.recommend{
color: #E7475A;
@media (max-width: 1074px){
    margin-top: 114px;
}

@media (max-width: 690px){
    font-size: 47.94px;
}
}

@media (max-width: 1074px){
    margin: 40px 0px;
}

@media (max-width: 690px){
    font-size: 47.94px;
}
`;

export const Description = styled.p`
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #FFFBE9;
&.recommend{
color: #E7475A;
@media (max-width: 690px){
    font-size: 16.44px;
}
}

@media (max-width: 690px){
    font-size: 16.44px;
}
`;