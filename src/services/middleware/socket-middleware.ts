import type { Middleware, MiddlewareAPI, AnyAction } from "redux";
import type {
  AppDispatch,
  RootState,
  TWSActionsTypes,
} from "../../utils/types";
import { refreshTokenRequest } from "../../utils/api";

export const socketMiddleware = (wsActions: TWSActionsTypes): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: AnyAction) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        let url = action.url;
        if (action.auth) {
          url += `?token=${localStorage.getItem("accessToken")?.split("Bearer ")[1]}`;
        }
        socket = new WebSocket(url);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, error: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onMessage, message: parsedData });
          if (
            action.auth &&
            parsedData.message === "Invalid or missing token"
          ) {
            refreshTokenRequest().then((res) => {
              if (!res?.success) {
                return Promise.reject(res);
              }
              localStorage.setItem("accessToken", res.accessToken || "");
              localStorage.setItem("refreshToken", res.refreshToken || "");
            });
            dispatch({ type: onClose, payload: event });
          }
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  }) as Middleware;
};
