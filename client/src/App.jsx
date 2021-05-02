import {
  SearchPage,
  PriceComparison,
  FeatComparison
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
    </AppBox>

  );
}

export default App;
