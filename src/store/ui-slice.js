import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    error: null,
    showModal: false,
  },
  reducers: {
    setNotification(state, action) {
      state.error = {
        status: action.payload.status,
        message: action.payload.message,
      };
      state.showModal = true;
    },
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    toggleShowModal(state) {
      state.showModal = !state.showModal;
    },
    deleteError(state) {
      state.error = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
