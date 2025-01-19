import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header";
import ErrorBoundary from "../error-boundry/error-boundry";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  LogoutPage,
  NotFound404Page,
} from "../../pages";
import ProtectedRouteElement from "../protected-route/protected-route";
import ProfileSettings from "../profile-settings/profile-settings";
import ProfileOrders from "../profile-orders/profile-orders";
import Modal from "../modal/modal";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import { authCheckUser } from "../../services/actions/auth";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
  const dispatch: any = useDispatch();

  useEffect(() => dispatch(authCheckUser()), [dispatch]);

  const handleCloseModalDetail = () => {
    navigate(-1);
  };
  return (
    <>
      <ErrorBoundary>
        <AppHeader />
        <Routes location={background || location}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <ProtectedRouteElement authorizedForbidden>
                <LoginPage />
              </ProtectedRouteElement>
            }
          />

          <Route
            path="/register"
            element={
              <ProtectedRouteElement authorizedForbidden>
                <RegisterPage />
              </ProtectedRouteElement>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRouteElement authorizedForbidden={true}>
                <ForgotPasswordPage />
              </ProtectedRouteElement>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRouteElement authorizedForbidden>
                <ResetPasswordPage />
              </ProtectedRouteElement>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement>
                <ProfilePage />
              </ProtectedRouteElement>
            }
          >
            <Route index element={<ProfileSettings />} />
            <Route path="orders" element={<ProfileOrders />} />
          </Route>
          <Route path="/logout" element={<LogoutPage />} />
          <Route
            path={"ingredients/:id"}
            element={
              <Modal onClose={handleCloseModalDetail}>
                <IngredientsDetails />
              </Modal>
            }
          />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path={"ingredients/:id"}
              element={
                <Modal onClose={handleCloseModalDetail}>
                  <IngredientsDetails />
                </Modal>
              }
            />
          </Routes>
        )}
      </ErrorBoundary>
    </>
  );
};

export default App;
