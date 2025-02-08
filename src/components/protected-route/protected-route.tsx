import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "../../hooks";

type TProps = {
  anonymous?: boolean;
  children: React.ReactNode;
};

const ProtectedRouteElement: FC<TProps> = ({ children, anonymous = false }) => {
  const { isUserLogged } = useSelector((state) => state.auth);
  const location = useLocation();
  const from = location.state?.from || "/";
  if (isUserLogged && anonymous) {
    return <Navigate to={from} />;
  }
  if (!isUserLogged && !anonymous) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};

export default ProtectedRouteElement;
