import App from 'components/app/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store';
import { fetchQuestsAction } from 'store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchQuestsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);