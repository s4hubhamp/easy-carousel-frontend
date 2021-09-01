import { uiActions } from "./ui-slice";
import { PhotosActions } from "./photos-slice";
import { CarouselActions } from "./carousel-slice";

import axios from "../apis/index";

export const fetchPhotos = (category, qty = 8) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleIsLoading());
      const response = await axios.get(
        "/search/photos/" + category + "?qty=" + qty
      );
      dispatch(uiActions.toggleIsLoading());

      dispatch(
        PhotosActions.replacePhotos({ photos: response.data.photos, category })
      );
      dispatch(
        CarouselActions.replacePhotos({
          photos: response.data.photos.slice(0, 8),
        })
      );
    } catch (e) {
      dispatch(uiActions.toggleIsLoading());
      dispatch(uiActions.toggleShowError());
      dispatch(
        uiActions.showNotification({
          status: e.response.status,
          message: e.response.data.error.message,
        })
      );
    }
  };
};
