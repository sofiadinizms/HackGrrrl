import {
  SearchPage,
  PriceComparison,
  FeatComparison,
  Footer
} from './components';

import {
  WhereToBuy
} from './views';

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
      <WhereToBuy />
      <Footer />
      <GlobalStyle />
    </AppBox>


  );
}

export default App;
