import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./slices/githubSlice";
import windowsReducer from "./slices/windowsSlice";
import systemReducer from "./slices/systemSlice";

export const store = configureStore({
  reducer: {
    github: githubReducer,
    windows: windowsReducer,
    system: systemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
