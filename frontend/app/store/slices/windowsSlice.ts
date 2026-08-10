"use client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface WindowGeometry {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface WindowState extends WindowGeometry {
  id: string;
  appId: string;
  title: string;
  minimized: boolean;
  maximized: boolean;
  prevGeometry: WindowGeometry | null;
  params?: Record<string, unknown>;
  workspace: number;
}

interface WindowsState {
  windows: Record<string, WindowState>;
  zOrder: string[];
  focusedId: string | null;
}

const initialState: WindowsState = {
  windows: {},
  zOrder: [],
  focusedId: null,
};

const CASCADE_STEP = 28;
const CASCADE_LIMIT = 6;

function focusTopmost(state: WindowsState) {
  for (let i = state.zOrder.length - 1; i >= 0; i--) {
    const id = state.zOrder[i];
    if (!state.windows[id]?.minimized) {
      state.focusedId = id;
      return;
    }
  }
  state.focusedId = null;
}

const windowsSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow(
      state,
      action: PayloadAction<{
        appId: string;
        title: string;
        size: { w: number; h: number };
        position?: { x: number; y: number };
        params?: Record<string, unknown>;
        workspace: number;
      }>
    ) {
      const { appId, title, size, position, params, workspace } = action.payload;
      const existing = state.windows[appId];

      if (existing) {
        existing.minimized = false;
        existing.title = title;
        existing.workspace = workspace;
        if (params) existing.params = params;
        state.zOrder = state.zOrder.filter((id) => id !== appId);
        state.zOrder.push(appId);
        state.focusedId = appId;
        return;
      }

      const openCount = Object.keys(state.windows).length;
      const cascade = (openCount % CASCADE_LIMIT) * CASCADE_STEP;

      state.windows[appId] = {
        id: appId,
        appId,
        title,
        x: position?.x ?? 80 + cascade,
        y: position?.y ?? 60 + cascade,
        w: size.w,
        h: size.h,
        minimized: false,
        maximized: false,
        prevGeometry: null,
        params,
        workspace,
      };
      state.zOrder.push(appId);
      state.focusedId = appId;
    },

    moveWindowToWorkspace(state, action: PayloadAction<{ id: string; workspace: number }>) {
      const win = state.windows[action.payload.id];
      if (!win) return;
      win.workspace = action.payload.workspace;
    },

    closeWindow(state, action: PayloadAction<string>) {
      delete state.windows[action.payload];
      state.zOrder = state.zOrder.filter((id) => id !== action.payload);
      if (state.focusedId === action.payload) {
        focusTopmost(state);
      }
    },

    focusWindow(state, action: PayloadAction<string>) {
      if (!state.windows[action.payload]) return;
      state.zOrder = state.zOrder.filter((id) => id !== action.payload);
      state.zOrder.push(action.payload);
      state.focusedId = action.payload;
    },

    minimizeWindow(state, action: PayloadAction<string>) {
      const win = state.windows[action.payload];
      if (!win) return;
      win.minimized = true;
      if (state.focusedId === action.payload) {
        focusTopmost(state);
      }
    },

    toggleTaskbarWindow(state, action: PayloadAction<string>) {
      const win = state.windows[action.payload];
      if (!win) return;
      if (win.minimized) {
        win.minimized = false;
        state.zOrder = state.zOrder.filter((id) => id !== action.payload);
        state.zOrder.push(action.payload);
        state.focusedId = action.payload;
      } else if (state.focusedId === action.payload) {
        win.minimized = true;
        focusTopmost(state);
      } else {
        state.zOrder = state.zOrder.filter((id) => id !== action.payload);
        state.zOrder.push(action.payload);
        state.focusedId = action.payload;
      }
    },

    toggleMaximize(state, action: PayloadAction<string>) {
      const win = state.windows[action.payload];
      if (!win) return;
      if (win.maximized) {
        if (win.prevGeometry) {
          win.x = win.prevGeometry.x;
          win.y = win.prevGeometry.y;
          win.w = win.prevGeometry.w;
          win.h = win.prevGeometry.h;
        }
        win.maximized = false;
        win.prevGeometry = null;
      } else {
        win.prevGeometry = { x: win.x, y: win.y, w: win.w, h: win.h };
        win.maximized = true;
      }
    },

    moveResizeWindow(state, action: PayloadAction<{ id: string; geometry: WindowGeometry }>) {
      const win = state.windows[action.payload.id];
      if (!win || win.maximized) return;
      Object.assign(win, action.payload.geometry);
    },

    closeAllWindows(state) {
      state.windows = {};
      state.zOrder = [];
      state.focusedId = null;
    },
  },
});

export const {
  openWindow,
  closeWindow,
  focusWindow,
  minimizeWindow,
  toggleTaskbarWindow,
  toggleMaximize,
  moveResizeWindow,
  moveWindowToWorkspace,
  closeAllWindows,
} = windowsSlice.actions;

export default windowsSlice.reducer;
