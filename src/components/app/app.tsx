import { useEffect } from "react";
import { useDispatch } from "../../hooks";
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
  IngredientPage,
  FeedPage,
  OrderPage,
  NotFound404Page,
} from "../../pages";
import ProtectedRouteElement from "../protected-route/protected-route";
import ProfileSettings from "../profile-settings/profile-settings";
import ProfileOrders from "../profile-orders/profile-orders";
import Modal from "../modal/modal";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import OrderCard from "../order-card/order-card";
import { authCheckUser } from "../../services/actions/auth";
import { getIngredients } from "../../services/actions/burger-ingredients";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckUser());
    dispatch(getIngredients());
  }, [dispatch]);

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
              <ProtectedRouteElement anonymous>
                <LoginPage />
              </ProtectedRouteElement>
            }
          />

          <Route
            path="/register"
            element={
              <ProtectedRouteElement anonymous>
                <RegisterPage />
              </ProtectedRouteElement>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRouteElement anonymous={true}>
                <ForgotPasswordPage />
              </ProtectedRouteElement>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRouteElement anonymous>
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
            <Route path="orders/:id" element={<OrderPage />} />
          </Route>
          <Route path="/logout" element={<LogoutPage />} />
          <Route path={"/ingredients/:id"} element={<IngredientPage />} />
          <Route path={"/feed"} element={<FeedPage />} />
          <Route path={"/feed/:id"} element={<OrderPage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path={"/ingredients/:id"}
              element={
                <Modal
                  onClose={handleCloseModalDetail}
                  header="Детали ингредиента"
                >
                  <IngredientsDetails />
                </Modal>
              }
            />
            <Route
              path={"/feed/:id"}
              element={
                <Modal onClose={handleCloseModalDetail}>
                  <OrderCard />
                </Modal>
              }
            />
            <Route
              path={"/profile/orders/:id"}
              element={
                <Modal onClose={handleCloseModalDetail}>
                  <OrderCard />
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
