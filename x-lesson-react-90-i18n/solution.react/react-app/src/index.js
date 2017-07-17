import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from 'react-intl'

import App from './App';
import './index.css';

ReactDOM.render(
  <IntlProvider locale="en">
      <App></App>
  </IntlProvider>,
  document.getElementById('root')
);
