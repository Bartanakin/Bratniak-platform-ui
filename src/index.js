import ReactDOM from 'react-dom/client';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={(<div>Loading</div>)}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
