import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider, useSelector } from "react-redux";
import { SnackbarProvider } from 'notistack';
import { store } from "./redux-thunk/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      < SnackbarProvider autoHideDuration={2000} maxSnack={20}>
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);
