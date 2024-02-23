import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { Provider } from 'react-redux';
// import { store, persistor } from '../src/Redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
        <BrowserRouter>
          {/* <PersistGate persistor={persistor}> */}
            {/* <Auth0Provider
              domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN as string}
              clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID as string}
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <App />
            </Auth0Provider> */}
              <App />
          {/* </PersistGate> */}
        </BrowserRouter>
      {/* </Provider> */}
    </React.StrictMode>,
  document.getElementById('root')
);
