import {
  SearchPage,
  PriceComparison
} from './components';

import {
  WhereToBuy
} from './views';

import {
  AppBox
} from './AppStyles';

function App() {
  return (
    <AppBox>
      <SearchPage />
      <PriceComparison />
      <WhereToBuy />
    </AppBox>

  );
}

export default App;
