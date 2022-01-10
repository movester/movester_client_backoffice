import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기
// import { createStore } from 'redux';
// import rootReducer from './modules';
import App from './App';
// import { Provider } from 'react-redux';
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
