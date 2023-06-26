import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import "./index.css"
import { AppRoutes  } from './route';
import { store } from './stor/store';
import "./media.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <AppRoutes/>
      </Provider>
  </React.StrictMode>
);
