import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRouteElement = ({
  children,
  anonymous = false,
}: any) => {
  const { isUserLogged } = useSelector((state: any) => state.auth);
  const location = useLocation();
  const from = location.state?.from || "/";
  if (isUserLogged && anonymous) {
    return <Navigate to={from} />;
  }
  if (!isUserLogged && !anonymous) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};

ProtectedRouteElement.propTypes = {
  children: PropTypes.element.isRequired,
  anonymous: PropTypes.bool,
};

export default ProtectedRouteElement;
