import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={}>
    <Home />
  </Provider>
)
