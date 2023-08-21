import { useMsal } from '@azure/msal-react';

const Login = () => {
  const { instance } = useMsal();

  const initializeSignIn = () => {
    instance.loginRedirect();
  };

  return (
    <>
      <div onClick={initializeSignIn}>Sign in</div>
    </>
  );
};
export default Login;
