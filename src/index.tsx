import 'dayjs/locale/en-gb';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import GlobalStyle from './GlobalStyle';
import store from './store';
import Tournaments from './pages/Tournaments';

dayjs.extend(utc);
dayjs.locale('en-gb');

const App: React.FC = () => {
  return <Tournaments />;
};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
