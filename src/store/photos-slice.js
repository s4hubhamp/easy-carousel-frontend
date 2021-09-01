import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    category: "nature",
  },
  reducers: {
    replacePhotos(state, action) {
      state.photos = action.payload.photos;
      state.category = action.payload.category;
    },
  },
});

export const PhotosActions = photosSlice.actions;

export default photosSlice;
