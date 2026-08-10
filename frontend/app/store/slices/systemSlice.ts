"use client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SystemPhase = "boot" | "desktop" | "shuttingDown" | "halted";

interface SystemState {
  phase: SystemPhase;
}

const initialState: SystemState = {
  phase: "boot",
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setPhase(state, action: PayloadAction<SystemPhase>) {
      state.phase = action.payload;
    },
  },
});

export const { setPhase } = systemSlice.actions;
export default systemSlice.reducer;
