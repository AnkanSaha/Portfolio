"use client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SystemPhase = "boot" | "desktop" | "shuttingDown" | "halted";

interface SystemState {
  phase: SystemPhase;
  activeWorkspace: number;
}

const initialState: SystemState = {
  phase: "boot",
  activeWorkspace: 1,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setPhase(state, action: PayloadAction<SystemPhase>) {
      state.phase = action.payload;
    },
    setActiveWorkspace(state, action: PayloadAction<number>) {
      state.activeWorkspace = action.payload;
    },
  },
});

export const { setPhase, setActiveWorkspace } = systemSlice.actions;
export default systemSlice.reducer;
