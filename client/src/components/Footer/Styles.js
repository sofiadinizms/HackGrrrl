import styled from 'styled-components';
import Theme from '../../global/theme';

export const Container = styled.section`
  height: 34vh;
  width: 100vw;
  background-color: ${Theme.colors.lightYellow};
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  overflow-x: hidden;
`

export const MangaRosa = styled.img`
  width: 100%;
  height: 36%;
  object-fit: contain;
`

export const SocialMedia = styled.img`
  width: 40px;
  height: 100%;
  object-fit: contain;
`

export const SocialContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`


