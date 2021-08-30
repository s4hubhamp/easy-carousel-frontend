import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import photosSlice from "./photos-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: photosSlice.reducer },
});

export default store;
