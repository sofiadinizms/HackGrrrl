import styled from 'styled-components';
import Theme from '../../global/theme';


export const ContainerModal = styled.div`
height: auto;
align-items: center;
padding: 0 30px;
margin-bottom: 30px;
background: #FFFFFF;
box-shadow: 0px 3.07167px 9.13316px rgba(205, 49, 0, 0.18);
border-radius: 20.5237px;
display: flex;

img{
width: 128px;
height: 440px;
}
`;

export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
margin-top: 50px;
margin-left: 28px;
`;

export const TitleModal = styled.h2`
font-weight: 600;
font-size: 21.7509px;
line-height: 1px;
color: #000000;
`;

export const SubTitle = styled.p`
font-style: normal;
font-weight: normal;
font-size: 12.2867px;
line-height: 18px;
color: #000000;
`;