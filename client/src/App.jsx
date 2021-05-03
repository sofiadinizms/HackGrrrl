import {
  SearchPage,
  PriceComparison,
  FeatComparison,
  Footer
} from './components';
import {
  AppBox
} from './AppStyles';
import GlobalStyle from '../src/global/globalStyles';

function App() {
  return (
    <AppBox>
      <SearchPage />
      <PriceComparison />
      <FeatComparison />
      <Footer />
      <GlobalStyle />
    </AppBox>


  );
}

export default App;
