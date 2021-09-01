import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    photos: [],
    currentImage: null,
  },
  reducers: {
    replacePhotos(state, action) {
      state.photos = action.payload.photos;
      state.currentImage = action.payload.photos[0];
    },
    setCurrentImage(state, action) {
      state.currentImage = action.payload.current;
    },
    rotateImage(state, action) {
      state.photos = state.photos.map((p) =>
        p.id === action.payload.id
          ? {
              ...p,
              angle: p.angle
                ? p.angle + action.payload.angle
                : action.payload.angle,
            }
          : p
      );
    },
  },
});

export const CarouselActions = carouselSlice.actions;

export default carouselSlice;
