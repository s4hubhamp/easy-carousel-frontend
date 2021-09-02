import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    photos: [],
    currentPhoto: null,
  },
  reducers: {
    replacePhotos(state, action) {
      state.photos = action.payload.photos;
      state.currentPhoto = action.payload.photos[0];
    },
    setCurrentPhoto(state, action) {
      state.currentPhoto = action.payload.current;
    },
    rotatePhoto(state, action) {
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
    addPhoto(state, action) {
      let exists = false;
      state.photos.forEach((p) => {
        if (p.id === action.payload.photo.id) exists = true;
      });
      if (exists) return state;
      state.photos.unshift(action.payload.photo);
      state.currentPhoto = state.photos[0];
    },
    removePhoto(state, action) {
      if (state.photos.length === 1) {
        return state;
      } else {
        state.photos = state.photos.filter((f) => f.id !== action.payload.id);
        if (state.currentPhoto.id === action.payload.id) {
          state.currentPhoto = state.photos[0];
        }
      }
    },
    // reArrange(state, action) {
    //   const draggedElIndex = state.photos.findIndex(
    //     (s) => s.id === action.payload.draggedElId
    //   );
    //   const index = state.photos.findIndex((s) => s.id === action.payload.id);

    //   if (draggedElIndex > index) {
    //     state.photos = state.photos.slice(0, index).concat(
    //       state.photos[draggedElIndex],
    //       state.photos[index],
    //       state.photos
    //         .slice(index + 1)
    //         .filter((e) => e.id !== action.payload.draggedElId)
    //     );
    //   }
    //   // else {
    //   //   const draggedEl = state.photos[draggedElIndex];
    //   //   const el = state.photos[index];

    //   //   state.photos = state.photos
    //   //     .slice(draggedElIndex + 1, index)
    //   //     .concat(draggedEl, el, state.photos.slice(index + 1));
    //   // }
    // },
  },
});

export const CarouselActions = carouselSlice.actions;

export default carouselSlice;
