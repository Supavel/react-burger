import { useDispatch as dispatchHook, TypedUseSelectorHook, useSelector as selectorHook } from "react-redux";
import { AppDispatch, RootState } from "../utils/types";

export const useDispatch = () => dispatchHook<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
