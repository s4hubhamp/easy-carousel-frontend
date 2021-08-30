import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
  },
  reducers: {
    replacePhotos(state, action) {
      state.photos = action.payload.photos;
    },
  },
});

export const PhotosActions = photosSlice.actions;

export default photosSlice;
