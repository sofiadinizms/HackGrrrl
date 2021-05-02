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

  
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  
  #search{
    width: 54%;
  }
    .ant-space-item{
      width: 100%;
    }

`

export const Title = styled.h1`
  color: ${Theme.colors.orange};
  font-family: ${Theme.fonts.family};
  font-size: 64px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0;
`

export const Description = styled.p`
  color: ${Theme.colors.black};
  font-family: ${Theme.fonts.family};
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 50px;
  width: 75%;
`