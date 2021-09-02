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
      console.log(response);
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
      console.dir(e.response);
      dispatch(uiActions.toggleIsLoading());
      dispatch(
        uiActions.setNotification({
          status: e.response.status || 500,
          message: e.response.statusText || "Unknown Error Occured",
        })
      );
    }
  };
};
