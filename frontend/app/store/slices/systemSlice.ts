"use client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SystemPhase = "boot" | "desktop" | "shuttingDown" | "halted";

interface SystemState {
  phase: SystemPhase;
  wifiEnabled: boolean;
  soundEnabled: boolean;
  volume: number;
}

const initialState: SystemState = {
  phase: "boot",
  wifiEnabled: true,
  soundEnabled: true,
  volume: 70,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setPhase(state, action: PayloadAction<SystemPhase>) {
      state.phase = action.payload;
    },
    setWifiEnabled(state, action: PayloadAction<boolean>) {
      state.wifiEnabled = action.payload;
    },
    setSoundEnabled(state, action: PayloadAction<boolean>) {
      state.soundEnabled = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export const { setPhase, setWifiEnabled, setSoundEnabled, setVolume } = systemSlice.actions;
export default systemSlice.reducer;
