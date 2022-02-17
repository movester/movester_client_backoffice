import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/configureStore';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { checkAdmin, checkOutAdmin } from './store/admin/adminSlice';

function loadAuth() {
  const admin = JSON.parse(localStorage.getItem('admin'));
  if (!admin) store.dispatch(checkOutAdmin());
  else store.dispatch(checkAdmin(admin));
}

loadAuth();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
