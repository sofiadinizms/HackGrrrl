import styled from 'styled-components';


export const ButtonContact = styled.a`
width: 133px;
height: 46px;
background: #E7475A;
color: white;
padding: 12px 23px;
position: absolute;
right: 30px;
top: 50px;
`;

export const ModalContact = styled.div`
width: 467px;
height: auto;
display: flex;
padding: 30px;
flex-direction: column;
position: absolute;
right: 20px;
top: 120px;
background-color: white;
z-index: 3;
box-shadow: 0px 4px 10px 0px #0000001A;

input{
border: 1px solid #D9D9D9;
box-sizing: border-box;
border-radius: 2px;
padding: 5px 5px;
outline: 0;
margin-bottom: 10px;
}

textarea{
padding: 50px;
outline: none;
}

button{
width: 129px;
height: 33px;
border: none;
outline: 0;
margin: 0 30px;
}
.send{
background: #E7475A;
border-radius: 2px;
color: white;
}

.send-file{
background: #E7475A;
border-radius: 2px;
background-color: white;
border: 1px solid #E7475A;
}
.buttons-container{
    margin: 20px 0;
    display: inline-block;
}
`;