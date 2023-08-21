import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import Login from './common/pages/login/LoginPage';
function App() {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <p>Hello</p>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </div>
  );
}

export default App;
