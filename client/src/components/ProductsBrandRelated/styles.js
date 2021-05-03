import styled from 'styled-components';
import Theme from '../../global/theme';

export const Container = styled.div`
 display: flex;
 border-bottom: 0.153584px solid #ccc;
 align-items: center;
 margin: 20px 0;

 @media (max-width: 690px){
     width: 80%;
 }
`;

export const Title = styled.p`
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 1px;
color: #DA5B00;

@media (max-width: 450px){
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
}
`;

export const Button = styled.a`
    text-decoration: none;
    background: #DA5B00;
    color: white;
    padding: 10px 16px;
    box-shadow: 0px 2px 0px 0px #0000000B;
    border: 1px solid #E7475A;
    font-size: 16px;

    @media (max-width: 1104px){
    width: 67px;
    display: flex;
    align-items: center;
    color: white;
    height: 40px;
    padding: 0px;
    font-size: 12px;
    }

@media (max-width: 600px){
    width: 132px;
}
`;

export const Price = styled.p`
font-style: normal;
font-weight: normal;
font-size: 26px;
line-height: 18px;
color: #000000;

@media (max-width: 480px){
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
}
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
margin-right: 100px;
`;