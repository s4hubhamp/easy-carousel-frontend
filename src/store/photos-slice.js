import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    currentImage: null,
    category: "nature",
  },
  reducers: {
    replacePhotos(state, action) {
      state.photos = action.payload.photos;
      state.category = action.payload.category;
      state.currentImage = action.payload.photos[0].regular;
    },
    setCurrentImage(state, action) {
      state.currentImage = action.payload.current;
    },
  },
});

export const PhotosActions = photosSlice.actions;

export default photosSlice;
