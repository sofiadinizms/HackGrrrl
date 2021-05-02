import {
  SearchPage,
  PriceComparison,
  FeatComparison,
  Footer
} from './components';
import {
  AppBox
} from './AppStyles';

function App() {
  return (
    <AppBox>
      <SearchPage />
      <PriceComparison />
      <FeatComparison />
      <Footer />
    </AppBox>

  );
}

export default App;
