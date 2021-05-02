import styled from 'styled-components';
import Theme from '../../global/theme';

export const Container = styled.section`
  height: 34vh;
  width: 100%;
  background-color: ${Theme.colors.lightYellow};
  display: flex;
  flex-direction: row wrap;
  align-content: space-around;
`

export const MangaRosa = styled.img`
  width: 100%;
  height: 36%;
  object-fit: contain;
`


