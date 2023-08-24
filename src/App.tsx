import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import Login from './common/pages/login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './common/pages/unAuthorized/Sample';

function App() {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <Contact />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </div>
  );
}

export default App;
