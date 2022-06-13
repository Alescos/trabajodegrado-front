/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return children;
}

/* const ProtectedRoute: ReactNode = ({ children }: { children: ReactNode }) => {
  const Auth = useAuth();
  const { isAuthenticated } = Auth;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}; */

export default ProtectedRoute;
