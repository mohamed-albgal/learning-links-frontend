import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from './amplify.config'
import Amplify from '@aws-amplify/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './store/store';
const { cognito, s3, apiGateway } = config;
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: cognito.REGION,
    userPoolId: cognito.POOLID,
    identityPoolId: cognito.IDENTITYPOOLID,
    userPoolWebClientId: cognito.APPCLIENTID
  },
  Storage: {
    region: s3.REGION,
    bucket: s3.BUCKET,
    identityPoolId: cognito.IDENTITYPOOLID,
  },
  API: {
    endpoints: [
      {
        name: "links",
        endpoint: apiGateway.URL,
        region: apiGateway.REGION,
      },
    ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
