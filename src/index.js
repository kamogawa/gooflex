import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from "Components/App";
import sample from './Reducers';

let store = createStore(sample);

store.dispatch(sample('Redux!'));

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);
