import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "../hooks";
import { logout } from "../services/actions/auth";
import Loader from "../components/loader/loader";

export function LogoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { logoutRequestFailed, requestExecute, isUserLogged } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    isUserLogged ? dispatch(logout()) : navigate("/login", { replace: true });
  }, [dispatch, navigate, isUserLogged]);

  return (
    <>
      {requestExecute && <Loader />}
      {logoutRequestFailed && (
        <div className="text text_type_main-default">Произошла ошибка</div>
      )}
    </>
  );
}
