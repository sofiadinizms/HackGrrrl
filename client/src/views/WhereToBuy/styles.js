import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
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
}
`;
export const ChoiceIsYour = styled.div`
display: flex;
flex-direction: column;
height: auto;
    width: 50vw;
    background-color: #E7475A;
    align-items: center;

`;

export const ContainerIconBottom = styled.div`
    width: 50vw;
    background-color: #E7475A;
    align-items: center;
    height: 91px;
`;

export const RecommendBrand = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 48.9vw;
align-items: center;
`;

export const Title = styled.h2`
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 2px;
color: #FFFBE9;
&.recommend{
color: #E7475A;
}
`;

export const Description = styled.p`
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #FFFBE9;
&.recommend{
color: #E7475A;
}
`;