import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import rootReducer from './modules';
import App from './App';
// import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';

// const store = createStore(rootReducer); // 스토어를 만듭니다.
// console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);

reportWebVitals();
