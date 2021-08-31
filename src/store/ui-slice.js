import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showError: false, error: null, isLoading: false },
  reducers: {
    toggleShowError(state) {
      state.showError = !state.showError;
    },
    showNotification(state, action) {
      state.error = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
