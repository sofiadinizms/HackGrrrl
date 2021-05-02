import styled from 'styled-components';
import Theme from '../../global/theme';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;

  .ant-btn-primary, .ant-btn-primary:hover, .ant-btn-primary:focus{
    background-color: ${Theme.colors.pink};
    border-color: ${Theme.colors.pink};

    ::selection{
      background-color: ${Theme.colors.pink};
      border-color: ${Theme.colors.pink};
    }
  }

  .ant-input{
    :focus, :hover{
      border-color: ${Theme.colors.pink};
      -webkit-box-shadow: ${Theme.colors.pink};
      box-shadow: ${Theme.colors.pink};
    }
  }

  @media (max-width: 768px){
   flex-flow: row wrap;
   align-content: flex-start; 
  }
  
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  
  #search{
    width: 54%;
    color: ${Theme.colors.orange};
  }
    .ant-space-item{
      width: 100%;
    }
  
  #short{
    display: none;
  }

  #big{
    display: inline;
  }

  #input{
    color: ${Theme.colors.orange};
  }
  
  @media (max-width: 768px){
    width: 82%;
    margin-top: 35px;

    #search{
      width: 100%;
    }
    #short{
      display: inline;
    }

    #big{
      display: none;
    }
  }
`

export const Title = styled.h1`
  color: ${Theme.colors.orange};
  font-family: ${Theme.fonts.family};
  font-size: 64px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
  
  @media (max-width: 768px){
    font-size: 36px;
    text-align: left;
  }
`

export const Description = styled.p`
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.family};
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
  width: 75%;

  @media (max-width: 768px){
    text-align: left;
    width: 100%;
  }
`

