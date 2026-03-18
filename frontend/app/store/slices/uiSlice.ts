"use client";
import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  mobileNavOpen: boolean;
  activeSection: string;
}

const initialState: UIState = {
  mobileNavOpen: false,
  activeSection: "home",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileNav(state) {
      state.mobileNavOpen = !state.mobileNavOpen;
    },
    closeMobileNav(state) {
      state.mobileNavOpen = false;
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMobileNav, closeMobileNav, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
