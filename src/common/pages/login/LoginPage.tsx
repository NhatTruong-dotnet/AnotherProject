import { useMsal } from '@azure/msal-react';
import { login } from '../../../infrastructure/msal/msalAcquireToken';
import './login.css';

const Login = () => {
  return (
    <div className="login-panel">
      <div
        className='login-panel-content'
      ><button id='btnLogin' onClick={login} className="btn btn-primary" >Login with your account</button></div>
    </div>
  );
};
export default Login;
