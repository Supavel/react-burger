import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRouteElement = ({
  children,
  authorizedForbidden = false,
}: any) => {
  const { isUserLogged } = useSelector((state: any) => state.auth);
  const location = useLocation();
  const afterLogging = location.state?.afterlogging;

  return (
    <>
      {isUserLogged && afterLogging && (
        <Navigate to={afterLogging} state={{ afterlogging: false }} />
      )}
      {!isUserLogged && !authorizedForbidden && (
        <Navigate to="/login" state={{ afterlogging: location.pathname }} />
      )}
      {isUserLogged && authorizedForbidden && !afterLogging && (
        <Navigate to="/" />
      )}
      {children}
    </>
  );
};

ProtectedRouteElement.propTypes = {
  children: PropTypes.element.isRequired,
  authorizedForbidden: PropTypes.bool,
};

export default ProtectedRouteElement;
