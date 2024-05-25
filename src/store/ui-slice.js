import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, { payload }) {
      state.notification = {
        status: payload.status,
        title: payload.title,
        message: payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
