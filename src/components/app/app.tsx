import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import ErrorBoundary from "../error-boundry/error-boundry";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  NotFound404Page,
} from "../../pages";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
