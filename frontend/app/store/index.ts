import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./slices/githubSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    github: githubReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
