import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showError: false, error: null },
  reducers: {
    toggle(state) {
      state.showError = !state.showError;
    },
    showNotification(state, action) {
      state.error = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
